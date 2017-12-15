const fetch = require("node-fetch");


function firstPromiseFetch (pdtId) {

  return fetch(`https://decath-product-api.herokuapp.com/products/${pdtId}`,{method: "GET"})
    .then((response) => response.json())
    .then((result) => result.brand_id)
    .then(function(result) {
      return fetch (`https://decath-product-api.herokuapp.com/brands/${result}`, {method: "GET"})
        .then((response) => response.json())
        .then((res) => {
          console.log(res.title);
        });
    })
    .catch((error) => {
      console.warn("HELLO", error);
    });

}



//efe288cb-fb63-4b23-b8df-529f04b8b02b


firstPromiseFetch("efe288cb-fb63-4b23-b8df-529f04b8b02b");
