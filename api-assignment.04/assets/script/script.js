'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2J1bWFuZ2xhZyIsImEiOiJjbWl1eGY4eG8xdWNrM2Rwd3R0OHdudTJwIn0.OXrnS1qNJok5oliucHDVBQ';

const btn = document.getElementById('toggleBtn');
const mapElement = document.getElementById('location');
let map;

function findUser() {
  map = new mapboxgl.Map({
    container: 'location',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-97.1384, 49.8951],
    zoom: 11
  });

  map.addControl(new mapboxgl.NavigationControl());
  mapElement.style.display = 'block';

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true
    })
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};