const express = require("express");
const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const PORT = 5000;
const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017";

//REST API endpoints
app.get("/", function (req, res) {
  res.send("Hello Everyone🥳🥳🥳");
});

//get locations
app.get("/locations", function (req, res) {
  db.collection("location")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.get("/quickSearch", function (req, res) {
  db.collection("mealType")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get list of restaurant

app.get("/restaurants", function (req, res) {
  let query = {};
  let stateId = Number(req.query.stateId);
  let mealId = Number(req.query.mealId);

  if (stateId) {
    query = { state_id: stateId };
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
  }
  db.collection("zomato")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//filter

app.get("/filter/:mealId", function (req, res) {
  let query = {};
  let sort = { cost: 1 };
  let mealId = Number(req.params.mealId);
  let cuisineId = Number(req.query.cuisineId);
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  if (req.query.sort) {
    sort = { cost: req.query.sort };
  }

  if (cuisineId) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
    };
  } else if (lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  } else if (cuisineId && lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  }
  db.collection("zomato")
    .find(query)
    .sort(sort)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//restaurant details

app.get("/details/:id", function (req, res) {
  // let id = mongo.ObjectId(req.params.id);
  let id = Number(req.params.id);
  db.collection("zomato")
    .find({ restaurant_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//meals details for restaurant

app.get("/menu/:id", function (req, res) {
  let id = Number(req.params.id);
  db.collection("menu")
    .find({ restaurant_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//Mongodb connection
mongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db("Edu2023");

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
