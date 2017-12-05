const request = require("request");

// https://postman-echo.com/get

function maFunction (result) {
  console.log(result);
}



function simpleGet (callback){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.

      callback (result);
    }
  );
};

simpleGet(maFunction);

//------------------------------------
// https://postman-echo.com/get

function maFunction (result) {
  console.log(result);
}


function simpleGetWithParams(callback){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, result) {
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
      callback(JSON.parse(result).args);
    }
  );
};

simpleGetWithParams(maFunction);

//------------------------------------
function maFunction (result) {
  console.log(result);
}

let d = new Date().toISOString().slice(0,10);
const myUrl = `https://postman-echo.com/time/valid?timestamp=${d}`
console.log(myUrl);

function validateTimestamp(callback) {
  request(
    {
      url: myUrl,
      method: "GET"
    },
    function(error, response, result) {
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
};

validateTimestamp(maFunction);


module.exports = {
  simpleGet : simpleGet,
  simpleGetWithParams : simpleGetWithParams,
  validateTimestamp : validateTimestamp
};
