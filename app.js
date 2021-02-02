const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const rootDir = require("./util/path");

// ROUTERS
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// app set이라는게 Express의 Config를 설정하는
// 방법이라고 생각하면 된다.
// views는 view들이 위치하는 default folder를 정해주면 된다.
// 적당히 바꿔도 되는데 이미 default 값이 views 라는거 추가로 알아두면 좋다.
// view engine이라는거는 말 그래도 Template engine 뭐 쓸거냐는거임.
// handlebars면은 때로는 귀찮지만 pug는 이미 express에 내장되어있어서
// 편하게 setting 할 수 있었다.
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
