/*
  Situation
  1- Check the function used in a store to pack clothes as gifts.
  2- It is a trademark of the store to occasionally send one or more stickers inside the packed gifts.
  3- The store has an inventory of paper and stickers.
  4- The stickers are included depending on the price of the gift. The more expensive, the more stickers are sent.
  5- If the store runs out of stickers it is not a problem, just console log which sticker bucket is empty.
  6- The paper used to pack depends on the type of gift and its size.
  7- If the store doesn't have enough paper to pack a gift throw an error! We must buy some more paper fast.

  Exercise
  1- Refactor the code so that you reduce scope exposure using blocks
  2- You cannot create more functions than the already existing pack() function.
  3- You cannot rename variables, neither inside nor outside of pack()
  4- You cannot move variables from outside to the function body (or viceversa).
  4- Keep in mind the suggestion of the author about when to use let or var when refactoring.

  Bonus:
  5- Make the function return an object like this when a gift is successfully packed:

  {
    giftName: string,
    paper:{
      color: string,
      used: number,
      left: number
    }
    stickers: {
      sun: boolean,
      lion: boolean,
      cat: boolean
    }
  }
*/

var paperConsumptionBySize = {
  XS: 100,
  S: 300,
  M: 500,
};

var paper = {
  purple: 2000,
  orange: 1500,
  black: 400,
};

var stickers = {
  sun: 1,
  cat: 10,
  lion: 0,
};

function pack(gift) {
  var stickers = {
    sun: "🌞",
    cat: "🐈",
    lion: "🦁",
  };

  if (gift.price > 20) {
    if (stickers.sun) {
      gift.stickers.push(stickers.sun);
      stickers.sun -= 1;
    } else {
      console.log("Not enough sun stickers");
    }
  }

  if (gift.price > 10) {
    if (stickers.lion) {
      gift.stickers.push(stickers.lion);
      stickers.lion -= 1;
    } else {
      console.log("Not enough sun stickers");
    }
  }

  if (stickers.cat) {
    gift.stickers.push(stickers.cat);
    stickers.cat -= 1;
  } else {
    console.log("Not enough cat stickers");
  }

  if (gift.size === "XS" && gift.type === "beach") {
    if (paper.orange < paperConsumptionBySize(gift.size)) {
      throw new Error("Not enough orange paper!");
    }
    gift.packed = true;
    var consumption = paperConsumptionBySize(gift.size);
    paper.orange -= consumption;
  }

  if (gift.size === "S" && gift.type === "classic") {
    if (paper.purple < paperConsumptionBySize(gift.size)) {
      throw new Error("Not enough purple paper!");
    }
    gift.packed = true;
    var consumption = paperConsumptionBySize(gift.size);
    paper.purple -= consumption;
  }

  if (gift.size === "M" && gift.type === "street") {
    if (paper.black < paperConsumptionBySize(gift.size)) {
      throw new Error("Not enough black paper!");
    }
    gift.packed = true;
    var consumption = paperConsumptionBySize(gift.size);
    paper.black -= consumption;
  }
}

// Some gifts to test:

const sandals = {
  name: "sandals",
  type: "beach",
  size: "XS",
  price: 9,
  packed: false,
};

const poloShirt = {
  name: "poloShirt",
  type: "classic",
  size: "S",
  price: 18,
  packed: false,
};

const hoodie = {
  name: "hoodie",
  type: "street",
  size: "M",
  price: 25,
  packed: false,
};
