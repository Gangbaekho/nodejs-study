const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// User 1 : N Products
Product.belongsTo(User, { constraint: true, onDelete: "CASCADE" });
User.hasMany(Product);

// User 1 : 1 Cart
User.hasOne(Cart);
Cart.belongsTo(User);

// Carts N : N Products
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

// User 1 : N Orders
Order.belongsTo(User);
User.hasMany(Order);

// Orders N : N Products
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  //   .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Max", email: "test@test.com" });
    }
    return user;
    // return Promise.resolve(user)
  })
  .then((user) => {
    return user.createCart();
    // app.listen(3000);
  })
  .then((cart) => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });

// app.listen(3000);
