const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

//Retrieve info from API
const categoriesUrl = "https://decath-product-api.herokuapp.com/categories";
const productsUrl = 'https://decath-product-api.herokuapp.com/products';
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


//fetchressources(productsUrl, insertElementsInProducts);
//fetchressources(categoriesUrl, insertElementsInCategories);
fetchressources(brandsUrl, insertElementsInBrands);
