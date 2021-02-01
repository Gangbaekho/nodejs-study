const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// body 내용을 Parsing 하기 위한 Middleware를 추가시켜주었다
// extended는 뭔지 모르니까 나중에 참고해보자.
app.use(bodyParser.urlencoded({ extended: false }));

// use(path, requestHandler) 순으로 넣어주면된다.
// 근데 use보다는 정확하게 get, post, delete, patch, put 이런
// http method를 쓰는게 좋음, exact가 걸려있기 때문이다.
// use를 쓰면 match되는건 다 걸리기 때문에 귀찮음.
// 이런식으로 쓰면은 모든 url은 /을 포함하고 있기 때문에
// 모든 요청에서 바로 아래의 middleware 로직을 처리하게 될 것임.
app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="product" method="POST"><input type="text" name="title"/><button type="submit>SEND</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  // 이렇게 하면 원랴 req의 body의 내용을 볼 수 있어야 하는데,
  // 미들웨어 추가 안해주면은 이 처리를 자동으로 해주지 않음.
  // 원래 chunk 뭐시기 해서 엄청 귀찮기 떄문이다.
  console.log(req.body);
  // 그냥 redirect 하는 방법과, redirect 할떄의 status 값을
  // 배워가면 된다.
  res.status(304).redirect("/");
});

app.listen(3000);
