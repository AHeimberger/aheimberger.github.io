function loadGPXFileMap(map, filename, trailColor) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function (data) {
            var latlon = [];
            var trkpt = data.documentElement.getElementsByTagName("trkpt");
            for (var i = 0; i < trkpt.length; i++) {
                var lat = parseFloat(trkpt[i].getAttribute("lat"));
                var lon = parseFloat(trkpt[i].getAttribute("lon"));
                var item = [lat, lon];
                latlon.push(item)
            }

            var polyline = L.polyline(latlon, { color: trailColor }).addTo(map);
            map.fitBounds(polyline.getBounds());
        }
    });
}

$(document).ready(function () {
    var map = L.map('map', {
        zoomControl: true,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        dragging: false
    });

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    loadGPXFileMap(map, "trail.gpx", "red");
});
