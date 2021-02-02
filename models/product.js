const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  //   Java의 Static method와 동일한 방식이다
  //  굳이 Object를 생성하지 않아도 Product.fetchAll() 사용하면
  //  바로 쓸 수 있다는게 장점이지 뭐.
  static fetchAll() {
    return products;
  }
};
