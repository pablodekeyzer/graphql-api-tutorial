const mongoose = require("mongoose");


const connectDb = () => {
  return mongoose.connect('mongodb://pablo:sickpass123@cluster0-shard-00-00.5plpr.mongodb.net:27017,cluster0-shard-00-01.5plpr.mongodb.net:27017,cluster0-shard-00-02.5plpr.mongodb.net:27017/?ssl=true&replicaSet=atlas-7j4atl-shard-0&authSource=admin&retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if (err) {
      console.log("Connection to Database failed.");
    }
    else {
      console.log("Database connection successful.");
    }
  });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;
