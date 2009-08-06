package App::VanTrash::Notifier;
use Moose;
use DateTime;
use namespace::clean -except => 'meta';

has 'mailer'    => (is => 'ro', isa => 'Object',        required => 1);
has 'reminders' => (is => 'ro', isa => 'Object',        required => 1);

sub need_notification {
    my $self = shift;
    my %args = @_;
    my $debug = $ENV{VT_DEBUG};

    my $as_of = $args{as_of} || DateTime->now;
    $as_of = $as_of->epoch;

    my @due;
    for my $rem (@{ $self->reminders->all }) {
        my $name = $rem->nice_name;
        unless ($rem->confirmed) {
            warn "reminder is not yet confirmed: $name\n" if $debug;
            next;
        }
        my $garbage_epoch = $rem->next_pickup;
        my $rem_time = $garbage_epoch + $rem->offset * 3600;
        if ($rem->last_notified > $rem_time) {
            warn "reminder notification already sent for $name\n" if $debug;
            next;
        }
        if ($as_of < $rem_time) {
            warn "It is too early to send for $name\n" if $debug;
            next;
        }

        push @due, $rem;
    }

    return \@due;
}

sub notify {
    my $self = shift;
    my $rem  = shift;

    my $garbage_day = DateTime->from_epoch( epoch => $rem->next_pickup );
    $self->mailer->send_email(
        to => $rem->email,
        subject => 'It is garbage day',
        template => 'notification.html',
        template_args => {
            reminder => $rem,
            garbage_day => $garbage_day->ymd,
        },
    );
    $rem->last_notified( $self->now() );
}

# Tests can override this
sub now { time() }

1;
