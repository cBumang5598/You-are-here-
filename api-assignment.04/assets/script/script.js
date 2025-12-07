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
  map.resize();

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true
    })
  } else {
    alert('Geolocation is not supported by this browser.');
  }
};

function successLocation(position) {
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;
  const userLocation = [longitude, latitude];

  map.flyTo({
    center: userLocation,
    zoom: 15,
    essential: true 
  })

  new mapboxgl.Marker({
    color: "#3a24fa"
})
  .setLngLat(userLocation)
  .addTo(map);
}

function errorLocation(error) {
  console.log('Geolocation Error:', error.message);
  alert('Could not get your exact location. Check your browser settings.');
};

btn.addEventListener('click', findUser);