//Task 1: Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
    }
  
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    updateStock(quantity) {
      this.stock -= quantity;
    }
  }
  
  // Test Cases:
  const prod1 = new Product("Laptop", 101, 1200, 10);
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
  
  prod1.updateStock(3);
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

  //Task 2: Creating an order class
  class Order {
    constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
      
      // Reduce the stock for the product when an order is created
      this.product.updateStock(quantity);
    }
  
    getOrderDetails() {
      const totalPrice = this.product.price * this.quantity;
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
  }
  
  // Test Cases:
  const order1 = new Order(501, prod1, 2);
  console.log(order1.getOrderDetails());
  // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
  
  console.log(prod1.getDetails());
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)  

  //Task 3: Creating an inventory class
  class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    listProducts() {
      this.products.forEach(product => {
        console.log(product.getDetails());
      });
    }
  }
  
  // Test Cases:
  const inventory = new Inventory();
  inventory.addProduct(prod1);
  inventory.listProducts();
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"  

  //Task 4: Implementing Order Management 
  inventory.placeOrder(601, prod1, 2); //The test case for task 4
  inventory.listOrders(); //Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
  console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

  //Task 5 - Implemented Product Restocking
inventory.restockProduct(101, 5); //Test case for Task 5
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"