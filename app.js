const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// ROUTERS
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

// 이런식으로 앞에 url을 안붙이면은
// match 안된건 다 여기서 처리하겠다는 걸로 보면 되겠다.
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found. 404 error</h1>");
});

app.listen(3000);
