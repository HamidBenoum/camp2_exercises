const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

//Retrieve info from API
const categoriesUrl = "https://decath-product-api.herokuapp.com/categories";
const productsUrl = "";
const brandsUrl = "https://decath-product-api.herokuapp.com/brands";



function fetchressources(url, callback) {
  request({
    url : url,
    method : "GET"
  }, function (error, response, apiresult) {
    const tmpArray =JSON.parse(apiresult);
    tmpArray.forEach(function(element) {
      callback(element);
    }) ;
  }
  );
}

function insertElementsInBrands (element) {
  pool.query(

    "INSERT INTO brands VALUES ($1::UUID, $2::VARCHAR(255))",
    [element.id, element.title ],

    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log("import successfull!");
      }
    }
  );
}

function insertElementsInCategories (element) {
  pool.query(

    "INSERT INTO categories VALUES ($1::UUID, $2::INTEGER, $3::text)",
    [element.id, element.decathlon_id, element.label],

    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
      //
      }
    }
  );
}


function insertElementsInProducts (element) {
  pool.query(

    "INSERT INTO products VALUES ($1::UUID, $2::INTEGER, $3::text, $4::text, $5::UUID, $6::double precision, $7::double precision, $8::double precision, $9::double precision, $10::text, $11::double precision)",
    [element.id, element.decathlon_id, element.title, element.description, element.brand_id, element.min_price, element.max_price, element.crossed_price, element.percent_reduction, element.image_path , element.rating],

    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        //
      }
    }
  );
}

//-----------------------------------------

/*loops for insert elements from link
link :
https://decath-product-api.herokuapp.com/categories/d0d6a6d4-8e0a-44f9-a2d3-8e3297e3c9f1/products
*/

function fillingTableIdProducts() {
  //1step build catIdUrl
  let myNewUrl = "";
  let myNewArray = [];

  pool.query(

    "SELECT id FROM categories",

    function(error, result) {
      if (error) {
        console.warn(result);
      } else {
        //console.log(result.rowCount);

        myNewArray = (result.rows).map(function (item) {
          myNewUrl = `https://decath-product-api.herokuapp.com/categories/${item.id}/products`;
          return myNewUrl;

        });
        console.log(myNewArray[0]);
      }
      for (let i = 0 ; i < myNewArray.length; i++) {
        const myItem = myNewArray[i];
        fetchressources(myItem, insertElementsInNewProductsByOne);
      }*/

    }
  );
  //table to fill new_productsbycategories cf products

}

function insertElementsInNewProductsByOne (element) {
  console.log(element);
  pool.query(

    "INSERT INTO new_productsbycategories VALUES ($1::UUID, $2::UUID)",
    [element.id, element.product_id],

    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(result);
      }
    }
  );
}

//-----------------------------------------



function startApp(){
  if(fetchressources(productsUrl, insertElementsInProducts)){
    console.log("products import successfull");
  }
  if(fetchressources(categoriesUrl, insertElementsInCategories)){
    console.log("categories import successfull");
  }
  if(fetchressources(brandsUrl, insertElementsInBrands)){
    console.log("products import successfull");
  }
}

//startApp();
fillingTableIdProducts()



module.exports = {
  startApp:startApp,
  fetchressources : fetchressources,
  insertElementsInBrands:insertElementsInBrands,
  insertElementsInCategories:insertElementsInCategories,
  insertElementsInProducts:insertElementsInProducts
};
