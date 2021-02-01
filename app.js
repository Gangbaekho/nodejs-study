const http = require("http");
const express = require("express");

// Express는 그냥 Middleware다?
// 그래서 express()를 한 것도 결국 middleware function을 불러오는
// 것에 불과하는 걸지도 모른다.
const app = express();

// 결국에 app.use()를 쓴다는 것 자체가
// 어떤 middleware를 추가시키겠다는 의미로 받아들이면 된다.
// next()라는 것은 그 다음 middleware로 가라는 의미니까
// 여기서는 순서가 중요하게 된다.
app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware");
  // 이렇게 send를 해주기만 하면 response를 전달해준다.
  // 그리고 Content-Type도 알아서 text/html로 해준다.
  // default 값이 그거인가보다.
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);

// 밑에꺼 이제 필요없다.
// const server = http.createServer(app);

// server.listen(3000);
