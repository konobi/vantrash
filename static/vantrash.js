(function($) {

Vantrash = function() {
}

Vantrash.prototype = {
    center: [ 49.26422,-123.138542 ],
    
    areas: {
        'vancouver-south-red': {
            colour: '#ff0000',
            points: [
                // north
                [49.24931890726428, -123.20480346679688], [49.250103287319796, -123.20072650909424], [49.25001924719565, -123.1715440750122], [49.24828238593356, -123.16815376281738], [49.24825437154151, -123.1636905670166], [49.24976712596484, -123.1593132019043], [49.24679760125124, -123.15712451934814], [49.246909662030326, -123.15485000610352], [49.24567697947196, -123.15480709075928], [49.24520070751418, -123.15330505371094],
                // east
                [49.241978747149034, -123.15351963043213], [49.240381697566704, -123.1552791595459], [49.22903275279931, -123.155837059021], [49.2280238315184, -123.15553665161133], [49.22712699530571, -123.15519332885742], [49.21605533260983, -123.14849853515625], [49.20859808107961, -123.14476490020752], [49.2038315792342, -123.14296245574951],
                // south
                [49.20728032946707, -123.1518030166626], [49.21229881267237, -123.15759658813477], [49.21611139790938, -123.1693983078003], [49.215999267246666, -123.17819595336914], [49.218269863587835, -123.18720817565918], [49.22068050603214, -123.1908130645752], [49.221633518287476, -123.19124221801758], [49.223875827570424, -123.19948196411133], [49.230490047165404, -123.20609092712402],
                // west
                [49.23144287024001, -123.20523262023926], [49.23060214495155, -123.19802284240723], [49.23357264360411, -123.1995677947998], [49.23603858226096, -123.20772171020508], [49.237439628926765, -123.20669174194336], [49.23525397876891, -123.19725036621094], [49.246293324597936, -123.19716453552246], [49.246293324597936, -123.19896697998047], [49.24931890726428, -123.20480346679688]
            ]
        },
        'vancouver-south-blue': {
            colour: '#0000ff',
            points: [
                // west
                [49.241978747149034, -123.15351963043213], [49.240381697566704, -123.1552791595459], [49.22903275279931, -123.155837059021], [49.2280238315184, -123.15553665161133], [49.22712699530571, -123.15519332885742], [49.21605533260983, -123.14849853515625], [49.20859808107961, -123.14476490020752], [49.2038315792342, -123.14296245574951],
                // south
                [49.202261336839165, -123.13579559326172], [49.20237349866379, -123.12901496887207], [49.20649526925917, -123.11013221740723],
                // east
                [49.212242743048414, -123.10996055603027], [49.21686827322927, -123.1098747253418], [49.22583776472992, -123.1084156036377], [49.237439628926765, -123.1078577041626],
                // north
                [49.237439628926765, -123.10601234436035], [49.240297640894866, -123.1058406829834], [49.24052179170185, -123.10678482055664], [49.244724430962506, -123.11176300048828], [49.244948561676736, -123.11493873596191], [49.243603762131194, -123.11669826507568], [49.24290333119604, -123.1177282333374], [49.24113820117528, -123.11807155609131], [49.241978747149034, -123.13931465148926], [49.2422028903258, -123.15330505371094],
            ]
        },
        'vancouver-north-purple': {
            colour: "#8800ff",
            points: [
                // north
                [49.28485561627723, -123.09807300567627], [49.28502357774888, -123.09077739715576], [49.28328794828536, -123.0824089050293], [49.285387492308075, -123.06386947631836], [49.290286080711894, -123.05957794189453], [49.29286114342676, -123.04906368255615], [49.28997818377568, -123.04030895233154], [49.289698275801356, -123.03146839141846], [49.293085055566884, -123.02331447601318],
                // east
                [49.293085055566884, -123.02331447601318], [49.26948472034926, -123.02352905273438],
                // south
                [49.26948472034926, -123.02352905273438], [49.26948472034926, -123.07734489440918], [49.27267688516586, -123.09854507446289],
                // west
                [49.27267688516586, -123.09854507446289], [49.276848789171865, -123.09691429138184], [49.28485561627723, -123.09807300567627]
            ]
        },
        'vancouver-south-purple': {
            colour: "#8800ff",
            points: [
                // west
                [49.27267688516586, -123.09854507446289], [49.26889666745873, -123.1001329421997],
                // south
                [49.26688043290664, -123.09644222259521], [49.266740413558665, -123.08961868286133], [49.26520017450573, -123.0812931060791], [49.26520017450573, -123.07743072509766], [49.25803042909645, -123.07760238647461], [49.257190156367976, -123.0760145187378], [49.25651792788526, -123.07592868804932], [49.256293849689776, -123.06979179382324], [49.254473176640516, -123.0682897567749], [49.251952133857074, -123.06455612182617], [49.2472738578059, -123.05322647094727], [49.2470217225551, -123.02365779876709],
                // east
                [49.26948472034926, -123.02352905273438],
                // north
                [49.26948472034926, -123.02352905273438], [49.26948472034926, -123.07734489440918], [49.27267688516586, -123.09854507446289],
            ]
        },
        'vancouver-south-green': {
            colour: "#00ff00",
            points: [
                // west
                [49.20649526925917, -123.11013221740723], [49.212242743048414, -123.10996055603027], [49.21686827322927, -123.1098747253418], [49.22583776472992, -123.1084156036377], [49.237439628926765, -123.1078577041626],
                // north
                [49.237439628926765, -123.1078577041626], [49.236767131486936, -123.07137966156006],
                // east
                [49.22519313682733, -123.0717658996582], [49.22530524663189, -123.07730197906494], [49.22011990200294, -123.07751655578613], [49.21905473682779, -123.07708740234375], [49.20879433895317, -123.07730197906494],
                // south
                [49.20649526925917, -123.11013221740723]
            ]
        },
        'vancouver-south-yellow': {
            colour: "#ffff00",
            points: [
                // north
                [49.23057412052884, -123.0714225769043], [49.230518071635785, -123.06558609008789], [49.229453130585625, -123.06562900543213], [49.22922892954473, -123.0234432220459],
                // south
                [49.21210256871031, -123.02361488342285], [49.210420445650286, -123.02417278289795], [49.201335992079436, -123.0232286453247],
                // east
                [49.20557000372596, -123.04151058197021], [49.205541965106185, -123.05760383605957], [49.20896255936757, -123.07476997375488],
                // west
                [49.20879433895317, -123.07730197906494], [49.21905473682779, -123.07708740234375], [49.22011990200294, -123.07751655578613], [49.22530524663189, -123.07730197906494], [49.22519313682733, -123.0717658996582], [49.23057412052884, -123.0714225769043]
            ]
        },
        'vancouver-north-red': {
            colour: "#ff0000",
            points: [
                // west
                [49.277492742916806, -123.22420120239258], [49.27267688516586, -123.22402954101562], [49.26618033219331, -123.22772026062012], [49.265452216913594, -123.21527481079102], [49.2583385255126, -123.21518898010254], [49.25800242023598, -123.19699287414551], [49.25497736974704, -123.19699287414551], [49.250103287319796, -123.19699287414551],
                // south
                [49.25001924719565, -123.1715440750122], [49.24828238593356, -123.16815376281738], [49.24825437154151, -123.1636905670166], [49.24976712596484, -123.1593132019043],
                // east
                [49.2575822854215, -123.16502094268799], [49.25769432172171, -123.16832542419434], [49.26416398663619, -123.16823959350586], [49.26503214551856, -123.16849708557129], [49.27264888461808, -123.16819667816162], 
                // north
                [49.27326489299744, -123.18553447723389], [49.27236887826632, -123.1966495513916], [49.275924840852376, -123.20261478424072], [49.275084872815384, -123.20978164672852], [49.277492742916806, -123.22420120239258]
            ]
        },
        'vancouver-north-blue': {
            colour: "#0000ff",
            points: [
                // west
                [49.241978747149034, -123.15351963043213], [49.24520070751418, -123.15330505371094], [49.24567697947196, -123.15480709075928], [49.246909662030326, -123.15485000610352], [49.24679760125124, -123.15712451934814], [49.24976712596484, -123.1593132019043], [49.2575822854215, -123.16502094268799], [49.25769432172171, -123.16832542419434], [49.26416398663619, -123.16823959350586], [49.26503214551856, -123.16849708557129], [49.27264888461808, -123.16819667816162], 
                // north
                [49.273992892982655, -123.16437721252441], [49.27382489393967, -123.1532621383667], [49.27768872717038, -123.1501293182373], [49.27766072946756, -123.14536571502686], [49.26800057338556, -123.14566612243652], [49.267888560482064, -123.13704013824463], [49.26618033219331, -123.133864402771], [49.265844280322405, -123.1168270111084], [49.269316705952896, -123.10901641845703], [49.26928870349788, -123.10657024383545],
                // east
                [49.24147442128158, -123.1076431274414],
                // south
                [49.244724430962506, -123.11176300048828], [49.244948561676736, -123.11493873596191], [49.243603762131194, -123.11669826507568], [49.24290333119604, -123.1177282333374], [49.24113820117528, -123.11807155609131], [49.241978747149034, -123.13931465148926], [49.2422028903258, -123.15330505371094]
            ]
        },
        'vancouver-north-green': {
            colour: "#00ff00",
            points: [
                // West
                [49.26928870349788, -123.10657024383545], [49.24147442128158, -123.1076431274414],
                [49.24052179170185, -123.10678482055664], [49.240297640894866, -123.1058406829834],
                [49.237439628926765, -123.10601234436035],
                // North
                [49.237439628926765, -123.1078577041626], [49.236767131486936, -123.07137966156006],
                // East
                [49.24018556510987, -123.07129383087158], [49.24012952712197, -123.0708646774292],
                [49.24337962531287, -123.07073593139648], [49.2434356596128, -123.07000637054443],
                [49.25032739361816, -123.06987762451172], [49.25032739361816, -123.06936264038086],
                [49.254333122085846, -123.0693626403808], [49.25438914395541, -123.06820392608643],
                [49.256293849689776, -123.06979179382324], [49.25651792788526, -123.07592868804932],
                [49.257190156367976, -123.0760145187378], [49.25803042909645, -123.07760238647461],
                [49.26520017450573, -123.07743072509766], [49.26520017450573, -123.0812931060791],
                [49.266740413558665, -123.08961868286133], [49.26688043290664, -123.09644222259521],
                [49.26889666745873, -123.1001329421997], [49.26928870349788, -123.10657024383545],
            ]
        },
        'vancouver-north-yellow': {
            colour: "#ffff00",
            points: [
                [49.22922892954473, -123.0234432220459],   [49.229453130585625, -123.06562900543213], 
                [49.230518071635785, -123.06558609008789], [49.23057412052884, -123.0714225769043], 
                [49.236767131486936, -123.07137966156006], [49.24018556510987, -123.07129383087158],
                [49.24012952712197, -123.0708646774292],   [49.24337962531287, -123.07073593139648],
                [49.2434356596128, -123.07000637054443],   [49.25032739361816, -123.06987762451172],
                [49.25032739361816, -123.06936264038086],  [49.254333122085846, -123.0693626403808],
                [49.25438914395541, -123.06820392608643],  [49.251952133857074, -123.06455612182617],
                [49.2472738578059, -123.05322647094727],   [49.246965692324494, -123.02335739135742], 
                [49.22922892954473, -123.0234432220459]
            ],
        }
    },

    daysUntil: function(d) {
        var counter = new Date; // today
        function sameday (a, b) {
            return a.getDate() == b.getDate()
                && a.getMonth() == b.getMonth()
                && a.getYear() == b.getYear();
        }

        var max_days = 20;
        var days = 0;
        while (!sameday(counter,d)) {
            counter.setDate(counter.getDate()+1);
            days++;
            if (days > 10) return -1;
        }
        return days;
    },

    formattedDate: function(d) {
        return d.toString().replace(/ \d+:\d+:.*/,'');
    },

    parseDate: function(d) {
        var parts = d.split('-');
        var dateobj = new Date;
        dateobj.setYear(parts[0]);
        dateobj.setMonth(parts[1]-1);
        dateobj.setDate(parts[2]);
        return dateobj;
    },

    showInfo: function(latlng, html) {
        this.map.openInfoWindow(latlng, '<br/>' + html);
    },

    showSchedule: function(name, latlng) {
        var self = this;
        $.getJSON('/zones/' + name + '/nextpickup.json', function (data) {
            var next = self.parseDate(data.next);
            var days = self.daysUntil(next);

            if (days == -1) {
                self.showInfo(latlng, 'Next pickup on ' + self.formattedDate(next));
            }
            else if (days == 1) {
                self.showInfo(
                    latlng, 'Next pickup <strong>tomorrow</strong> on ' + self.formattedDate(next)
                );
            }
            else {
                self.showInfo(
                    latlng, 'Next pickup in ' + days + ' days on ' + self.formattedDate(next)
                );
            }
        });
    },

    render: function(node) {
        var self = this;
        this.map = new GMap2(node);
        this.map.setCenter(
            new GLatLng(this.center[0], this.center[1]), 12
        );

        var points = [];
        self.polygons = {};
        $.each(this.areas, function (name, data) {
            var polygon = new GPolygon(
                $.map(data.points, function(point) {
                    var latlng = new GLatLng(point[0], point[1])
                    return latlng;
                }),
                data.colour, 5, 0.5, data.colour, 0.2
            );
            self.polygons[name] = polygon;
            self.map.addOverlay(polygon);

            GEvent.addListener(polygon, 'click', function(latlng) {
                self.showSchedule(name, latlng);
            });
        });

        this.setCurrentLocation();
    },

    addClickHandler: function() {
        GEvent.addListener(this.map, 'click', function(overlay, latlng) {
            if (latlng) {
                $('#clicks').append('['+latlng.y+', '+latlng.x+'], ');
            }
        });
    },

    setCurrentLocation: function () {
        var self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                if (self._doneloc) return;
                self._doneloc = true;
                var point = new GLatLng(position.coords.latitude, position.coords.longitude);
                $.each(self.polygons, function(name, polygon) {
                    if (polygon.getBounds().contains(point)) {
                        self.map.addOverlay(new GMarker(point));
                        self.showSchedule(name, point);
                    }
                });
            });
        }
    }
}

})(jQuery);
