const OAuth = require("OAuth");
const request= require("request");

const myOAuth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_API_KEY,
  process.env.TWITTER_API_SECRET
  , "1.0A", null, "HMAC-SHA1"
);


//1 fonction principale qui reçoit un param ( tweetId) et une fonctoion call back (ici :tweetsHumanFormated ), retourne un tableau d'objet "data", que je parse avec JSON.parse
function fetchtwTweets(tweetId, callback) {
  const myUrl = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${tweetId}&count=5`;
  myOAuth.get(
    myUrl,
    process.env.TWITTER_API_TOKEN,
    process.env.TWITTER_API_SECRET_TOKEN,
    function (error, data){
      if (error) {
        console.log(error);
      } else {
        callback(JSON.parse(data));
      }
    }
  );
}


// Cette fonction recupere un élément de la fonction fetchtwTweets cf "callback(JSON.parse(data));""
function tweetsHumanFormated(element, callback) {
  const text = element.map((tweet)=> tweet.text); // text est un tableau de string
  const mytmpElement = text.map(function(textElement) {
    transaleFeeling(textElement); // on transmet chaque string du tableau à la fonction transaleFeeling.
  });
}



const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const url = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

const text = "INSERT HERE A PART FROM YOUR FAVORITE ENGLISH SONG";
const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

// reçoit les infos de la part de la fonction tweetsHumanFormated et va faire la requete sur watson
function transaleFeeling(text) {
  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) { // query watson
    const myObjectCollectionItem = JSON.parse(body).emotion.document.emotion; // je ne prends que les valeurs qui se trouvent dans Emotion/ document/emotions de l'objets qui se trouvent dans body
    console.log("\n");
    console.log(myObjectCollectionItem);
    console.log("\n");
  });
}

//j'appelle la fonction fetchtwTweets avec en parametre "Decathlon" et la fonction "tweetsHumanFormated"
fetchtwTweets("Decathlon", tweetsHumanFormated);
