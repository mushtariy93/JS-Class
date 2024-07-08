class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    Product.productCount++;
  }

  static productCount = 0;

  static getProductCount() {
    return Product.productCount;
  }

  static totalPrice(products) {
    let total = 0;
    for (let product of products) {
      total += product.price;
    }
    return total;
  }
}

class CareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calculateDiscount() {
    switch (this.warrantyPeriod) {
      case 5:
        return 0.1;
      case 4:
        return 0.2;
      case 3:
        return 0.3;
      case 2:
        return 0.4;
      case 1:
        return 0.5;
      default:
        return 0;
    }
  }

  getPriceWithDiscount() {
    return this.price * (1 - this.calculateDiscount());
  }
}


const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new CareProduct(3, "Tablet", 500, 4);

console.log(Product.getProductCount()); 

const products = [product1, product2, product3];
console.log(Product.totalPrice(products)); 
console.log(CareProduct.totalPrice(products)); 
