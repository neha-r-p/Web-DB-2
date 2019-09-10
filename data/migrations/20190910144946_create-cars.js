exports.up = function(knex) {
  //create table called cars
  return knex.schema.createTable("cars", tbl => {
    //id, primary key, auto-increment, integer
    tbl.increments();

    //VIN, make, model, mileage REQUIRED
    tbl
      .string("VIN", 17)
      .unique()
      .notNullable();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();

    //transmission type, status of title not always immediately known
    tbl.string("transmissionType").defaultTo("Unknown");
    tbl.string("statusOfTitle").defaultTo("Unknown");
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
  };
