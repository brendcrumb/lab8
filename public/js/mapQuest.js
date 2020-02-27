function initMap() {
	// add your code here
  L.mapquest.key = '8fc4FWtaaccV3wOJbHj4uQvgC7ttObIG';

  var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapQuest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
