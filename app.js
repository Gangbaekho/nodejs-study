const http = require("http");

// argument에는 request handler를 넣어주면 된다는 개념.
const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  console.log(url);
  console.log(method);
  console.log(headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Text from Node.js!</h1>");
  res.end();

  // 이걸 쓰면은 server가 꺼진다. process는 글로벌변수라서
  // 그냥 접근할 수 있다는 것 정도.
  // process.exit()
});

server.listen(3000);
