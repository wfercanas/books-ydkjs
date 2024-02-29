/*
1- Read the code and discuss about what this program is about without running it.
2- Write down what you think is wrong in the program without running it.
3- Compare with your colleagues what you wrote.
4- Try to make the program work (refactor) using pure functions.
*/

let order = [];
const store = [
  {
    productName: "apples",
    currentStock: 23,
    minStock: 30,
    maxStock: 100,
  },
  {
    productName: "peaches",
    currentStock: 2,
    minStock: 15,
    maxStock: 40,
  },
];

function fullOrder(store, productName) {
  var product = store.find((product) => product.productName === productName);
  var order = order.find((order) => order.productName === productName);
  if (order) {
    if (product.currentStock + order.quantity !== product.maxStock) {
      order.quantity = product.maxStock - product.currentStock;
      return;
    }
  }
  if (product.currentStock !== product.maxStock) {
    order.push({
      productName,
      quantity: product.maxStock - product.currentStock,
    });
  }
}

function discretionalOrder(store, productName, quantity) {
  var product = store.find((product) => product.productName === productName);
  var order = order.find((order) => order.productName === productName);
  if (order) {
    if (order.quantity + quantity < product.maxStock) {
      order.quantity += quantity;
    }
  }
  order.push({ productName, quantity });
}

function purchase(store, order) {
  order.forEach((order) => {
    var product = store.find(
      (product) => product.productName === order.productName
    );
    product.currentStock += order.quantity;
  });
  orders = [];
}

function sell(store, productName, quantity) {
  var product = store.find((product) => product.productName === productName);
  if (product.currentStock < quantity) {
    return;
  }
  product.currentStock -= quantity;
  if (product.currentStock === 0) {
    discretionalOrder(store, productName, product.minStock);
  }
}

order = store.map((product) => fullOrder(store, product.productName));
console.log("orders", store);
purchase(store, order);
console.log("purchase", store);
sell(store, "apples", 95);
console.log("sell", store);
