const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'Edu2023';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db("Edu2023");

  client.close();
});


























// const express = require("express");
// const mongo = require("mongodb");
// const MongoClient = mongo.MongoClient
// const app = express();
// const PORT = 5000;
// let db

// const MONGO_URL = "mongodb://localhost:27017"

// //REST API endpoints
// app.get("/", function (req, res) {
//     res.send("Hello Everyone🥳🥳🥳");
//   });
  
//   //get locations
//   app.get("/locations", function (req, res) {
//     res.send(locations);
//   });

// //   app. listen (PORT, ()=>{
// //   console.log(`Server started on port ${PORT}`)});

//   MongoClient.connect(MONGO_URL, (err, client) => {
//     console.log("Mongo is connected");
//     if (err) console.log("Error while connecting")
//     db = db.client("Edu2023")
//     app.listen(PORT, () => {
//       console.log(`Server started on port ${PORT}`);
//     });
//   });