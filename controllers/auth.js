const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  if (req.session) {
    console.log(req.session);
  }
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("602a135562e9030550db633f")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch((error) => console.log(error));
};

exports.postLogout = (req, res, next) => {
  // console.log(req.session);
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    res.redirect("/");
  });
};
