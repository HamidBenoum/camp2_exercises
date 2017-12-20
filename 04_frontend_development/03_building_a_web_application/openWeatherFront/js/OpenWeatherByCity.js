const fetch = require("node-fetch");

/* Recode the function weatherByCityName getting a city as input and
return the temperature from Open Weather
*/

const API_KEY = process.env.OPENWEATHER_FORCAST_API_KEY;


function weatherByCity(cityName) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&APPID=${API_KEY}`,{method: "GET"})
    .then((response) => response.json())
    .then((jsonresponse) => jsonresponse.main )
    .then(function(jsonresponse) {
      const result = (`${cityName}, Temperateur : ${jsonresponse.temp} °`);
      return result;

    })
    .catch((error) => {
      console.warn("Ceci est une erreur : ", error);
    });
}



//weatherByCity("PARIS");


module.exports = weatherByCity;


//https://api.openweathermap.org/data/2.5/weather?units=metric&q="bogota"&APPID=356dff76038943f3a648dfc61bbfbdea
