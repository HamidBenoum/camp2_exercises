const pg = require("pg");


function getInformationsfromDb(db_table){
  const client = new pg.Client();
  client.connect();

  client.query(
    "SELECT * FROM "+ db_table,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        return (result);
      }
      client.end();
    }
  );
}



module.exports = {
  getInformationsfromDb:getInformationsfromDb
};
