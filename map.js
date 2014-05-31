$(document).ready(function() {

    var cloudmade_api_key = "8ee2a50541944fb9bcedded5165f09d9";

    var map = L.map('map', {
        // options here
    }).setView([35.596, -82.55], 14);

    var busStops = L.tileLayer.wms("http://opendataserver.ashevillenc.gov/geoserver/ows", {
	layers: 'coa_bus_stops',
	format: 'image/png',
	transparent: true,
	attribution: "Bus stops"
    });


    var routes = L.tileLayer.wms("http://opendataserver.ashevillenc.gov/geoserver/ows", {
	layers: 'coa_transit_bus_routes',
	format: 'image/png',
	transparent: true,
	attribution: "Bus routes"
    });


    var osmBaseLayer = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18
    });



    var layerControl = L.control.layers(
	{
            'Open Street Map' : osmBaseLayer
	},
	{
	    'Routes': routes,
	    'Stops': busStops
	}, 
	{}).addTo(map);


var markers = [];

// this will refresh the map every 10 seconds
/*
var interval = setInterval(function() {
    refreshMap();
}, 10000);
*/


// will update position of each marker
function refreshMap() {
    $.each(markers, function(marker, i) {
	if (map.hasLayer(marker)) {
	    map.removeLayer(marker);
	}

	map.addLayer(marker);
    });
}


function getJson() {

// todo translate

//    $.each(jsonArray

}


function translateJson(obj) {

    var latlng = new L.latLng(obj.lat, obj.lon);

    var marker = L.marker(latlng, {
	// todo, marker options
    });

    markers[obj.id] = marker;

}

});

