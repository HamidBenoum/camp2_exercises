const fetch = require("node-fetch");
const weatherByLatitudeAndLongitude = require ("../02_open_weather/OpenWeatherlonlat");
const GOOGLEPLACES_APY_KEY = process.env.GOOGLEPLACES_APY_KEY;


//longituge from cityName

function weatherByCityByGoogle(cityName) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName},FR&key=${GOOGLEPLACES_APY_KEY}`,{method: "GET"})
    .then((response) => response.json())
    .then(function(jsonresponse){
      weatherByLatitudeAndLongitude(jsonresponse.results[0].geometry.location.lat,jsonresponse.results[0].geometry.location.lng);
    } )
    .catch((error) => {
      console.warn("Ceci est une erreur : ", error);
    });
}

weatherByCityByGoogle("PARIS");

module.exports = weatherByCityByGoogle;



//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDTKuBK37boYXfG0UkfLSGJBPxSf0XyD04
