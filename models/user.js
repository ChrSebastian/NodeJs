const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectID = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findById() {
    const db = getDb();
    return db.collection("users").find({ _id: new ObjectID(userId) });
  }
}

module.exports = User;
