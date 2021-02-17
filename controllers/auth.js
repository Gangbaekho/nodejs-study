exports.getLogin = (req, res, next) => {
  console.log(req.get("Cookie").split(";")[0].split("=")[1]);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true; Max-Age=10");
  res.redirect("/");
  // res.render("auth/login", {
  //   path: "/login",
  //   pageTitle: "Login",
  // });
};
