/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const storeItems = [
  {
    id: "001-beetroot",
    name: "beetroot", 
    price: 0.35
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.45
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.25
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.35
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.75
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.25
  },
  {
    id: "007-bell-pepper",
    name: "bell-pepper",
    price: 0.45
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.35
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.25
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.55
  }
];

// Option 1: How we structure data in DB

const cartItems = [
  {
    itemId: "001-beetroot",
    quantity: 5
  },
  {
    itemId: "001-beetroot",
    quantity: 5
  }, {
    itemId: "002-carrot",
    quantity: 5
  },
  {
    itemId: "003-apple",
    quantity: 5
  },
  {
    itemId: "004-apricot",
    quantity: 5
  },
  {
    itemId: "005-avocado",
    quantity: 5
  },
  {
    itemId: "006-bananas",
    quantity: 5
  },
  {
    itemId: "007-bell-pepper",
    quantity: 5
  },
  {
    itemId: "008-berry",
    quantity: 5
  },
  {
    itemId: "009-blueberry",
    quantity: 5
  },
  {
    itemId: "010-eggplant",
    quantity: 5
  }
];

// Option 2: A simpler version 

// const cartItemsV2 = [
//   {
//     item: {
//       id: "001-beetroot",
//       name: "beetroot",
//       price: 0.35
//     },
//     quantity: 5 
//   }
// ];



// renderStoreItems()

// input: an array of storeItems
// output: - 

// renderCartItems()

// input: an array of storeItems that has a quantity key 
// outpput: - 