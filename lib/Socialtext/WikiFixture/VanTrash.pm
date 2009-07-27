package Socialtext::WikiFixture::VanTrash;
use Moose::Role;
use App::VanTrash::Model;
use IPC::Run qw/start finish/;
use Test::More;
use File::Path qw/mkpath rmtree/;
use IO::All;

has 'model' => (is => 'ro', isa => 'App::VanTrash::Model', lazy_build => 1);
has 'http_server' => (is => 'rw', isa => 'HashRef');
has 'email_file' => (is => 'ro', isa => 'Str', lazy_build => 1);

after 'init' => sub {
    my $self = shift;
    $self->start_up_http_server;
    $self->clear_reminders;
};

after 'stop' => sub {
    my $self = shift;
    $self->stop_http_server;
};

sub stop_http_server {
    my $self = shift;
    my $server = $self->http_server || return;

    my $h = $server->{handle};
    $h->pump_nb;
    $h->kill_kill();
    if (my $msg = ${ $server->{output}}) {
        warn $msg;
    }
}

sub start_up_http_server {
    my $self = shift;

    my $out = '';
    my $base_dir = base_path();
    my @command = ($^X, "$base_dir/bin/vantrash-http.pl");
    my $handle = start(\@command, \*STDIN, \$out, \$out);
    $self->http_server( {
            handle => $handle,
            output => \$out,
        }
    );
    die "Failed to run @command" unless $handle;
    sleep 1;
    pump $handle;
    unless ($out =~ m/Starting up HTTP server on port (\d+)/) {
        die "Couldn't find HTTP port:\n$out\n";
    }
    $out = "";
    $self->{base_url} = "http://localhost:$1";
    diag "Setting base_url to $self->{base_url}";
}

sub clear_reminders {
    my $self = shift;
    my $model = $self->model;
    my $zones = $model->zones;
    for my $zone (@$zones) {
        my $reminders = $model->reminders($zone);
        for my $r (@$reminders) {
            $model->delete_reminder($zone, $r);
        }
    }
}

sub reminder_count_is {
    my $self = shift;
    my $count = shift;

    my $all_reminders = $self->model->all_reminders;
    is scalar(@$all_reminders), $count, 'reminder count';
}

sub email_like {
    my $self = shift;
    my $regex = shift;

    like scalar(io($self->email_file)->slurp), $regex, 'email matches';
}

sub base_path {
    my $file = $INC{'Socialtext/WikiFixture/VanTrash.pm'};
    (my $dir = $file) =~ s#(.+)/.+#$1#;
    return "$dir/../../..";
}

sub _build_model {
    return App::VanTrash::Model->new( data_path => base_path() . '/data' );
}

sub _build_email_file {
    require File::Temp;
    my $dir = File::Temp::tempdir( CLEANUP => 1 );
}

1;