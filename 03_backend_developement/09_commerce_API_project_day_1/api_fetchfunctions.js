const pg = require("pg");


function fetchAllRessources(table) {
  const client = new pg.Client();
  client.connect();

  client.query(
    `SELECT * FROM ${table} `,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        return (result.rows);
      }
      client.end();
    }
  );
}





function fetchressourcesById(item){

  const client = new pg.Client();
  client.connect();
  //00024d84-ed1f-408f-96f1-2c839d03064a
  client.query(
    "SELECT * FROM categories where id = $1::UUID",
    [item],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        return result;
      }
      client.end();
    }
  );
}



module.exports = {
  fetchAllRessources:fetchAllRessources,
  fetchressourcesById:fetchressourcesById

};
