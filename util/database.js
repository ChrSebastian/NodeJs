const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://Bastyze98:Bastyze98@cluster0.qg5czrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
