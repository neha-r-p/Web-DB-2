
exports.up = function(knex) {
  //create table called cars
  return knex.schema.createTable('cars', tbl => {
      //id, primary key, auto-increment, integer
      tbl.icrements();


  })
};

exports.down = function(knex) {
  
};
