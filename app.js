const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const connectMongoose = require("./util/mongoose.s");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const MONGODB_URI = require("./util/mongodbUri.s");

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  User.findById("602a135562e9030550db633f")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

connectMongoose(app);
