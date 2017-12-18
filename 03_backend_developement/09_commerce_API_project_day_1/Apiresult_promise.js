const fetch = require("node-fetch");
const { Pool } = require("pg");
const pool = new Pool();

//Retrieve info from API

//const myCategorieUrl = "https://decath-product-api.herokuapp.com/categories/963d3c28-236b-4581-8c80-9e71c161fe22/products"

const myCategorieUrl = "https://decath-product-api.herokuapp.com/categories"

function idFromCategories(item) {
  // const client = new pg.Client();
  // client.connect();
  pool.query(
    "SELECT id FROM categories",

    function(error, result) {
      if (error) {
        console.warn(result);
      } else {
        let myNewArray = [];
        let paquetToSend = 0;
        myNewArray = result.rows.forEach(function(item, index) {
          if (index % 50 === 0) {
            paquetToSend ++
          }
          setTimeout(function () {insertcatId_pdts(item.id);},paquetToSend*500);
        });
        //client.end();
      }
    }
  );
}

function insertcatId_pdts(categorieId) {
  return fetch(`https://decath-product-api.herokuapp.com/categories/${categorieId}/products`,{method: "GET"})
  .then((response) => response.json())
  .then(function(jsonresponse){
    for (let i = 0; i < jsonresponse.length; i++ ) {
      //console.log(categorieId + " - " + jsonresponse[i].id);
      // const client = new pg.Client();
      // client.connect();
      pool.query(
        "INSERT INTO new_productsbycategories VALUES ($1::UUID, $2::UUID)",
        [categorieId, jsonresponse[i].id ],
        function(error, result) {
          if (error) {
            console.warn(error);
          } else {
          console.log("import succesfull");
          }
          //client.end();
        }
      );
    }
  } )
  .catch((error) => {
    console.warn("Ceci est une erreur : ", error);
  });

}


function sleep(seconds){
  const waitUntil = new Date().getTime() + seconds*10;
  while(new Date().getTime() < waitUntil) true;
}

//idFromCategories(myCategorieUrl);

module.exports = {
  idFromCategories:idFromCategories,
  insertcatId_pdts:insertcatId_pdts
};
