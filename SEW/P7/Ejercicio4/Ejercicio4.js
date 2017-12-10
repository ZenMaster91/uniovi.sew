// Loads a map with the default possition as center.
function initMap() {
  var initPoint = new google.maps.LatLng(43.5751, -5.9567);
  var settings = {
    zoom: 15,
    center: initPoint,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
  };
  var map = new google.maps.Map(document.getElementById('mapa-canvas'), settings);

}

// Loads a map with the current possition as center.
function localizeMe() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var settings = {
      center: latlng,
      zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById('mapa-canvas'), settings);

    // Adding the marker of the current position.
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Estás aquí',
    });
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
