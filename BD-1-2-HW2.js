const express = require("express");
const app = express();

app.get("/bmi", (req, res) => {
  let height = parseFloat(req.query.height);
  let weight = parseFloat(req.query.weight);
  let bmi = weight / (height * height);
  res.send(bmi.toString());
});

app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseInt(req.query.units);
  let price = parseFloat(req.query.price);
  let totalPrice = units * price;
  res.send(
    "Your total for " + units + " " + product + " is " + totalPrice.toString(),
  );
});

app.get("/grade", (req, res) => {
  let math = parseFloat(req.query.math);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);
  let gradeInPercentage = ((math + science + english) / 300) * 100;
  res.send("Your grade in percentage is " + gradeInPercentage + "%");
});

app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let discountedPrice = cartTotal - cartTotal * (discount / 100.0);
  res.send("Result: your bill amount is " + discountedPrice);
});

app.get("/split-bill",(req,res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  res.send("Result: each friend owes ₹" + splitAmount + " against the bill");
});

app.get("/celsius-to-fahrenheit",(req,res) => {
let celsius = parseFloat(req.query.celsius);
  let fahrenheit = (celsius * 9/5) + 32;
  res.send("Result:" + fahrenheit + " fahrenheit");
});

app.get("/monthly-salary",(req,res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let monthlySalary = totalHours * hourlyWage;
  res.send("Result: your monthly salary is ₹" + monthlySalary);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
