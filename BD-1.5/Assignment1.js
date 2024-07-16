const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

app.get("/cart-total", (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = newItemPrice + cartTotal;
  res.send(result.toString());
});

app.get("/membership-discount",(req,res) => 
  {
    let cartTotal = parseFloat(req.query.cartTotal);
    let isMember = req.query.isMember === "true";
    if(isMember)
    {
      let discount = cartTotal * (discountPercentage / 100);
      let result = cartTotal - discount;
      res.send(result.toString());
    }
    else
    {
    res.send("No discount applied");  
    }
  });

app.get("/calculate-tax",(req,res) => 
  {
    let cartTotal = parseFloat(req.query.cartTotal);
    let taxAmount = (cartTotal * taxRate) / 100;

    res.send(taxAmount.toString());
  });


app.get("/estimate-delivery",(req,res) => 
  {
    let shippingMethod = req.query.shippingMethod;
    let distance = parseFloat(req.query.distance);
    let deliveryDays = 0;
      if (shippingMethod === 'standard')
      {
        deliveryDays = (distance / 50); 
      }
      else if (shippingMethod === 'express') 
      {
        deliveryDays = (distance / 100); 
      }
      res.send(deliveryDays.toString());
  });

app.get("/shipping-cost",(req,res) => 
  {
  let weight = parseFloat(req.query.weight);
    let distance = parseFloat(req.query.distance);
    let result = weight * distance * 0.1;
    res.send(result.toString());
  });

app.get("/loyalty-points",(req,res) => 
  {
    let purchaseAmount = parseFloat(req.query.purchaseAmount);
    result = purchaseAmount * loyaltyRate;
    res.send(result.toString());
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
