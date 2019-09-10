
exports.up = function(knex) {
  //create table called cars
  return knex.schema.createTable('cars', tbl => {
      //id, primary key, auto-increment, integer
      tbl.icrements();

      //VIN, make, model, mileage REQUIRED

      //transmission type, status of title not always immediately known

  })
};

exports.down = function(knex) {
  
};
