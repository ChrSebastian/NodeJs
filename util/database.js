const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://Bastyze98:Bastyze98@cluster0.qg5czrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
