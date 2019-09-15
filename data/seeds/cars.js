
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "VIN": "ASSDS12012",
          "make": "toyota",
          "model": "camry",
          "mileage": 22000,
          "transmissionType": "automatic",
          "statusOfTitle": "Unknown"
        },
        {
          "VIN": "ABC1234567923",
          "make": "Subaru",
          "model": "WRX",
          "mileage": 1234,
          "transmissionType": "manual",
          "statusOfTitle": "clean"
        },
        {
          "VIN": "XYZ0987SDFI",
          "make": "Ford",
          "model": "Mustang",
          "mileage": 6312,
          "transmissionType": "manual",
          "statusOfTitle": "salvage"
        }
      ]);
    });
};
