const express = require('express');
const app = express();

let temperatures = [22, 26, 19, 30, 23, 28, 17, 31];

function filterHighTemperatures(temperature)
{
  return temperature > 25;
}

app.get("/high-temperatures",(req,res) => {
  let result = temperatures.filter(temperature => filterHighTemperatures(temperature));
  res.json(result);
});

let prices = [80, 120, 95, 150, 60, 110];

function filterLowPrices(price)
{
  return price <= 100;
}

app.get("/low-prices",(req,res) => {
  let result = prices.filter(price => filterLowPrices(price));
  res.json(result);
});

let ratings =  [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];

function filterHighRatings(rating)
{
  return rating > 3.5;
}

app.get("/high-ratings",(req,res) =>{
  let result = ratings.filter(rating => filterHighRatings(rating));
  res.json(result);
});

let names = ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita'];

function filterLongIndianNames(name)
{
  return name.length > 6;
}

app.get("/long-indian-names",(req,res) => {
  let result = names.filter(name => filterLongIndianNames(name));
  res.json(result);
});

let productPrices =  [10, 25, 50, 75, 100, 150, 200];

function filterCheaperProducts(price, filterParam)
{
  return price < filterParam;
}

app.get("/cheaper-products",(req,res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let result = productPrices.filter(price => filterCheaperProducts(price, filterParam));
res.json(result);  
});

const PORT = 3000;
app.listen(PORT,() =>
  {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });