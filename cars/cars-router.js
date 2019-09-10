const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.post('/', (req, res) => {
    carData = req.body;

    db('cars')
    .insert(carData)
    .then(ids => {
        db('cars')
            .where({ id: ids[0] })
            .then(newCar => {
                res.status(201).json(newCar)
            })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Error creating car data" })
    })
})

module.exports = router;
