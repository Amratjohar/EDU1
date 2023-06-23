const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const PORT = 5000;
const app = express();

const MONGO_URL = "mongodb://localhost:27017";

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

//get mealType

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

//Mongodb connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting")
  db = client.db("Edu2023");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
