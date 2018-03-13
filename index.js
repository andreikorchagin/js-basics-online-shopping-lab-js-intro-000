var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var price = Math.floor(Math.random() * 100) + 1;
  var newItem = {
    itemName: item,
    itemPrice: price
  };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here

}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return cart;
      break;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    cart = [];
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;

  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
