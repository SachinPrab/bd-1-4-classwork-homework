const express = require("express");
const app = express();

let cors = require('cors');
app.use(cors());

let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 }
];

function addNewItem(productid, name, price, quantity)
{
  let newItem = { productId: productid, name: name, price: price, quantity: quantity };
  cart.push(newItem);
  return cart;
}

app.get("/cart/add",(req,res) => {
  let productid = parseInt(req.query.productid);
  let name = req.query.name;
  let price = parseFloat(req.query.price);
  let quantity = parseInt(req.query.quantity);
  let result = addNewItem(productid, name, price, quantity);
  res.json(result);
});

function updateItemQuantity(cart, productId, quantity)
{
  for(let i = 0; i < cart.length; i++)
    {
      if(cart[i].productId === productId)
      {
        cart[i].quantity = quantity;
      }
    }
  return cart;
}

app.get("/cart/edit",(req,res) => {
  let productId = parseInt(req.query.productId);
  let quantity = parseInt(req.query.quantity);
  let result = updateItemQuantity(cart, productId, quantity);
  res.json(result);
});

function deleteItemFromCart(cart, productId)
{
  return cart.filter(item => item.productId !== productId);
}

app.get("/cart/delete",(req,res) => {
  let productId = parseInt(req.query.productId);
  let result = deleteItemFromCart(cart, productId);
  res.json({ cartItems: result });
});

function getCartItems(cart)
{
  return cart;
}

app.get("/cart",(req,res) => {
  let result = getCartItems(cart);
  res.json({ cartItems: result });
});

function getTotalQuantity(cart)
{ let sum = 0;
  for(let i = 0; i < cart.length; i++)
    {
      sum += cart[i].quantity;
    }
 return sum;
}

app.get("/cart/total-quantity",(req,res) => {
  let result = getTotalQuantity(cart);
  res.json({ totalQuantity: result });
});

function getTotalPrice(cart)
{ let sum = 0;
  for(let i = 0; i < cart.length; i++)
    {
      sum += cart[i].price * cart[i].quantity;
    }
 return sum;
}

app.get("/cart/total-price",(req,res) => {
  let result = getTotalPrice(cart);
  res.json({ totalPrice: result });
});

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost/:${PORT}`);
});