const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

//Retrieve info from API

//const categoriesUrl = "https://decath-product-api.herokuapp.com/categories/963d3c28-236b-4581-8c80-9e71c161fe22/products"


let categorieslimits = 0


function idFromCategories(callback) {

  pool.query(
    "SELECT id FROM categories",

    function(error, result) {
      if (error) {
        console.warn(result);
      } else {
        let myNewArray = [];
        myNewArray = result.rows.map(function(item) {
          //console.log(result.rowCount);
          callback(item.id);
        });
      }
    }
  );
  //table to fill new_productsbycategories cf products
}


function fetchDataParcategorie(catId) {
  let myNewUrl = "";
  myNewUrl = `https://decath-product-api.herokuapp.com/categories/${catId}/products`;
  //console.log(myNewUrl);


  request({
    url :myNewUrl,
    method : "GET",
  },

  function (error, response, apiresult) {

    const tmpArray =JSON.parse(apiresult);


    tmpArray.forEach(function(element) {

      const categorieId = catId;
      console.log(categorieId, element.id);

      pool.query(
        "INSERT INTO new_productsbycategories VALUES ($1::UUID, $2::UUID)",
        [categorieId, element.id],
        function(error, result) {
          if (error) {
            console.warn(error);
          } else {
            setTimeout(function(){ console.log(`Import Ok ==> Cat ID = ${catId} et PDT ID = ${element.id}`); }, 500);
          }
        }
      );
    });
  },
  sleep(1)

  );


}

function sleep(seconds){
  const waitUntil = new Date().getTime() + seconds*1000;
  while(new Date().getTime() < waitUntil) true;
}


function delayInsertData(){
  let batchCount = 0;

  for (let i=0; i< 1002; i ++) {
    batchCount++;
    if (batchCount % 100 === 0) {
      sleep(1);
      idFromCategories(fetchDataParcategorie);

    }
  }
}

//delayInsertData();
//fetchDataParcategorie("5f8fd5f6-a4a3-444d-91e9-6c8483318b64");
idFromCategories(fetchDataParcategorie);
//5f8fd5f6-a4a3-444d-91e9-6c8483318b64
