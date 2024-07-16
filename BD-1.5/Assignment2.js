const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/",(req,res) => 
  {
    res.send("Welcome to our stock portfolio analysis API!");
  });

app.use("/calculate-returns",(req,res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let result = (marketPrice - boughtAt) * quantity;
  res.send(result.toString());
});

app.get("/total-returns",(req,res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = stock1 + stock2 + stock3 + stock4;
  res.send(result.toString());
});

app.get("/calculate-return-percentage",(req,res) => 
  {
    let boughtAt = parseFloat(req.query.boughtAt);
    let returns = parseFloat(req.query.returns);
    let result = ((returns - boughtAt) / boughtAt) * 100;
    res.send(result.toString());
  });

app.get("/total-return-percentage",(req,res) => 
  {
    let stock1 = parseFloat(req.query.stock1);
    let stock2 = parseFloat(req.query.stock2);
    let stock3 = parseFloat(req.query.stock3);
    let stock4 = parseFloat(req.query.stock4);
    let result = stock1 + stock2 + stock3 + stock4;
    res.send(result.toString());
  });

app.get("/status",(req,res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = "";
  if(returnPercentage > 0)
  {
    result = "profit";
  }
  else
  {
    result = "loss";
  }
  res.send(result);
});

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is running at http://localhost:${PORT}`);
});