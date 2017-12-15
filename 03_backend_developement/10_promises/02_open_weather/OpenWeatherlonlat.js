const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_FORCAST_API_KEY;


/*Recode the function weatherByLatitudeAndLongitude
that accept an input like 32.661343, 51.680374
http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}
*/

function weatherByLatitudeAndLongitude(lat,lon){
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`,{method: "GET"})
    .then((response) => response.json())
    .then(function(jsonresponse){
      console.log(`temperature ${jsonresponse.list[0].main.temp} °`);
    } )
    .catch((error) => {
      console.warn("Ceci est une erreur : ", error);
    });
}
//weatherByLatitudeAndLongitude(32.661343,51.680374);

module.exports = weatherByLatitudeAndLongitude;

//http://api.openweathermap.org/data/2.5/forecast?lat=32.661343&lon=51.680374&units=metric&APPID=356dff76038943f3a648dfc61bbfbdea`
