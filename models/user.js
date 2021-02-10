const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const { getDb } = require("../util/database.s");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: ObjectId(userId) })
      .next();
    // findOne({ _id: ObjectId(userId) })
  }
}

module.exports = User;
