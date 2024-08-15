/*
  Evaluate the following function, which returns the cost of delivery for an order.
  The objective is to:
  - Refactor the function to make it work
  - Reduce as much as possible the TDZ times inside the function.
  - Pass the tests
  Types:
  - items: array of objects, where each object is an item with name, reference, price and quantities purchased.
  - distance: meters. Distance between the store and the address of the recipient of the order.
  - value: money. Equal to the sum of the price*quantities in each item
  - cost: money. Cost of the delivery.
  Consider:
  - Each discount must be applied directly using the base cost.
*/

// CODE BELOW -->

function deliveryCost(order) {
  if (distance < 100) {
    let cost = 5000;
  } else if (distance < 500) {
    let cost = 7000;
  } else if (distance < 1000) {
    let cost = 10000;
  } else {
    let cost = 14000;
  }

  if (items.length > 4) {
    cost -= cost * 0.05;
  }

  if (value > 50000) {
    cost -= cost * 0.1;
  }

  var { value } = order;
  var { items } = order;
  var { distance } = order;

  return cost;
}

// TESTS, DON'T CODE BELOW -->

function testDeliveryCost(describe, order, expected) {
  const result = deliveryCost(order);

  if (result !== expected) {
    console.error(`❌ ${describe}: Expected ${expected}, but got ${result}`);
  } else {
    console.log(`✅ ${describe}`);
  }
}

testDeliveryCost("Empty order", { value: 0, items: [], distance: 0 }, 0);
testDeliveryCost(
  "Closer, short, and cheap",
  {
    value: 20000,
    items: [{ name: "red socks", price: 20000, quantity: 1 }],
    distance: 20,
  },
  5000
);
testDeliveryCost(
  "Closer, big, and cheap",
  {
    value: 40000,
    items: [{ name: "kitten pins", price: 8000, quantity: 5 }],
    distance: 20,
  },
  4750
);
testDeliveryCost(
  "Far, short, and cheap",
  {
    value: 20000,
    items: [{ name: "red socks", price: 20000, quantity: 1 }],
    distance: 1500,
  },
  14000
);
testDeliveryCost(
  "Far, big, and cheap",
  {
    value: 40000,
    items: [{ name: "kitten pins", price: 8000, quantity: 5 }],
    distance: 2000,
  },
  13300
);
testDeliveryCost(
  "Far, big, and expensive",
  {
    value: 955000,
    distance: 2400,
    items: [
      {
        name: "hawaiian shirt",
        price: 85000,
        quantity: 3,
      },
      {
        name: "skinny jeans",
        price: 140000,
        quantity: 5,
      },
    ],
  },
  11900
);
