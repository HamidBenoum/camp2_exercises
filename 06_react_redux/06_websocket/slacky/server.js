const express = require("express");
const WebSocket = require("ws");
const server = require("http").createServer();
const path = require("path");


// Express will only serve static file
const app = express();
app.use(express.static(path.join(__dirname, "./slacky_front/public")));


const wss = new WebSocket.Server({server});

wss.on("connection", function (ws) {
  console.info("websocket connection open");
});


server.on("request", app);
server.listen(3001, () => console.log("Server listening on 3001"));
