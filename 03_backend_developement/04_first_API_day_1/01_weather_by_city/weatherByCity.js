const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

/*
weatherByCity("Bogota")
> 17°C
*/


function weatherByCity(cityName) {
  const myUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&APPID=${API_KEY}`;

  const temp = request({
    url: myUrl,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    return `${json.main.temp} °C`;
  });
  return temp;//"5.5 °C"
}

weatherByCity("Bogota");

module.exports = weatherByCity;
