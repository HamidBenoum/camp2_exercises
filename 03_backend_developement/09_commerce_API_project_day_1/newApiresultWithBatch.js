const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

//Retrieve info from API

//const categoriesUrl = "https://decath-product-api.herokuapp.com/categories/963d3c28-236b-4581-8c80-9e71c161fe22/products"


function idFromCategories(callback) {
  let myNewArray = [];

  pool.query(
    "SELECT id FROM categories",

    function(error, result) {
      if (error) {
        console.warn(result);
      } else {
        myNewArray = result.rows.map( function(item) {
          callback(item.id);
        });
      }
    }
  );
  return myNewArray;
}


function fetchTrucParcategorie(catId) {
  let myNewUrl = "";
  myNewUrl = `https://decath-product-api.herokuapp.com/categories/${catId}/products`;
  request({
    url :myNewUrl,
    method : "GET",

  }, function (error, response, apiresult) {
    const tmpArray =JSON.parse(apiresult);
    tmpArray.forEach(function(element) {
      console.log(`Cat ID = ${catId} et PDT ID = ${element.id}`);
      const categorieId = catId;
      pool.query(
        "INSERT INTO new_productsbycategories VALUES ($1::UUID, $2::UUID)",
        [categorieId, element.id],
        function(error, result) {
          if (error) {
            console.warn(error);
          } else {
            console.log("successfull import");
          }
        }
      );
      //callback(element);
    });
  });


}
function startImportData(idFromCategories) {

  let batch = 0;

  for (let i = 0; i < 1002; i++){
    //
  }

}


//fetchTrucParcategorie('5f8fd5f6-a4a3-444d-91e9-6c8483318b64');
//idFromCategories(fetchTrucParcategorie);
startImportData(idFromCategories);
