const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const { getDb } = require("../util/database.s");

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    // not perfect logic. just reference.
    const db = getDb();
    const updatedCart = { items: [{ ...product, quantity: 1 }] };
    db.collection("users").updateOne(
      { _id: new ObjectId(this._id) },
      { $set: { cart: updatedCart } }
    );
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
