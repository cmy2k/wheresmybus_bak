$(document).ready(function() {

    var cloudmade_api_key = "8ee2a50541944fb9bcedded5165f09d9";

    var map = L.map('map', {
        // options here
    }).setView([35.596, -82.55], 14);


/*
    var cloudmadeBaseLayer = L.tileLayer("http://{s}.tile.cloudmade.com/" + cloudmade_api_key + "/997/256/{z}/{x}/{y}.png", {
        //            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    });
*/

    var osmBaseLayer = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18
    }).addTo(map);


/*
    var layerControl = L.control.layers({
        'Open Street Map' : osmBaseLayer,
        'Cloudmade' : cloudmadeBaseLayer
    }).addTo(map);
*/
  
});
