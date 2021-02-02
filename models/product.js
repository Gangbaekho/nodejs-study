const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // 이거 사용하지 말고.
    // JSON file을 이용하자는 거임.
    // 뭐 사실 이것도 DB를 쓰는게 아니라서 그냥 편법인데
    // 한 번 해보는거지 뭐
    // products.push(this);
    const p = path.join(rootDir, "data", "products.json");
    // 뭐 p에 있는걸 읽는거고,
    // async 적으로 움직이나? callback function을 추가해 준 듯.
    // 읽은 다음에 그냥 추가하는 거임..
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      // write 할 때도 error handling 할 수 있다는 거 정도
      // 한 번 쯤 생각해봐라. 사실 읽고 쓰는데 에러가 날 수 있잖아
      // 그건 당연한거니까.
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};
