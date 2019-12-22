var loadingIndicator = document.querySelector("#loading");
var mapImage = document.querySelector("#map-image");
var confirmBtn = document.querySelector("#confirm-btn");
var window = window;

function getLocation() {
  console.log("finding location");
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var result = position.coords;
      loadingIndicator.setAttribute("hidden", true);
      mapImage.setAttribute(
        "src",
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(" +
          result.longitude +
          "," +
          result.latitude +
          ")/auto/240x320?access_token=pk.eyJ1IjoiaXNtYWVsa2QiLCJhIjoiY2pybDhheWR5MDVmbTRhcG9jcDBya3dnOCJ9.BWi-UskVOJBnCabeM4u8Yw"
      );
    });

  }
}
getLocation()

function startLocating() {}

document.querySelector("#confirm-btn").addEventListener("click", nextPage);
window.addEventListener("Enter", nextPage);

function nextPage() {
  window.location = "/choose-service.html";
}
