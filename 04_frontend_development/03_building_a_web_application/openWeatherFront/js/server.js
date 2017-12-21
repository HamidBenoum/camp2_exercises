const express = require("express");
const fetch = require("node-fetch");
const app = express();
const path = require('path');


const port = process.env.PORT || 3000;
const API_KEY = process.env.OPENWEATHER_FORCAST_API_KEY;

app.use(express.static('./'));
app.get("/:id", function (request, result) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${request.params.id}&APPID=${API_KEY}`,{method: "GET"})
      .then((response) => response.json())
      .then((jsonresponse) => {
        console.log(jsonresponse.weather[0].icon);
        return jsonresponse.weather[0].main;
      })
      .then(function(jsonresponse) {
          result.send(`<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
            <style>
            body { padding-top: 70px; }
            </style>

            <title>Open Weather App</title>
          </head>
          <body>
              <div class="container">
                <div class="row">
                  <!-- navbar -->
                  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <form class="form-inline my-2 my-lg-0 mx-auto">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search your city" aria-label="Search" id="searchCity">
                      <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </nav>
                </div>
                <!-- navbar -->
                <div class="row">
                  <div class="card rounded mx-auto" style="40rem;">
                    <!--  <img src="${jsonresponse}.jpeg" class="rounded" alt="${jsonresponse}"> -->
                    <img src="http://openweathermap.org/img/w/${jsonresponse.weather[0].icon}.png" class="rounded" alt="${jsonresponse}">
                    <div class="card-body">
                      <p class="card-text text-center"> Ville : ${request.params.id}</p>
                    </div>
                  </div>
                </div>
              </div>
              <script src="https://use.fontawesome.com/443e1c4c2a.js"></script>
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
          </body>
          </html>`);
      })
      .catch((error) => {
        console.warn("Ceci est une erreur : ", error);
      });
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
