const express = require('express')
const mongoose = require('mongoose');
const router = require("express").Router();
const app = express()

const MONGO_URI = 
process.env.MONGODB_URI;

const mongoDB = async () => {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log(err);
    else {
      console.log('Connected to MongoDB!');
      const getData = await mongoose.connection.db.collection("FoodData");
      getData.find({}).toArray(function(err, data){
        if(err) console.log(err);
        else console.log(express.json(data));
      })
    }
  });
}

module.exports = mongoDB;



/*
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/knock-knock-server";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
*/