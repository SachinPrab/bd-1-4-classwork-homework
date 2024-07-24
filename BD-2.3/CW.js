const express = require('express');
const app = express();

let products = [{"name": "Laptop", "price": 50000, "category": "Electronics"},
  {"name": "Mobile", "price": 20000, "category": "Electronics"},
  {"name": "Shirt", "price":1500, "category": "Apparel"},
  {"name": "Mixer Grinder", "price": 4000, "category": "Home Appliances" }];

function filterByCategory(productObj, category)
{
 return productObj.category === category; 
}

app.get("/products/category/:category",(req,res) => {
  let category = req.params.category;
  let result = products.filter(productObj => filterByCategory(productObj, category));
  res.json(result);
});

let cars = [{"make": "Maruti","model": "Swift", "mileage": 15000},
            {"make": "Hyundai", "model": "i20", "mileage": 25000},
            {"make":"Tata", "model": "Nexon", "mileage": 30000}];

function filterByMileage(carObj, mileage)
{
  return carObj.mileage < mileage;
}

app.get("/cars/mileage/:maxMileage",(req,res) => {
let maxMileage = parseFloat(req.params.maxMileage);
  let result = cars.filter(carObj => filterByMileage(carObj, maxMileage));
  res.json(result);
});

let movies = [{"title": "3 Idiots", "genre": "Comedy", "rating": 9},
              {"title": "Dangal", "genre": "Drama", "rating":10},
              {"title": "Bahubali", "genre": "Action", "rating": 8}];

function filterByRating(movieObj, rating)
{
  return movieObj.rating > rating;
}

app.get("/movies/rating/:minRating",(req,res) => {
  let minRating = parseFloat(req.params.minRating);
  let result = movies.filter(movieObj => filterByRating(movieObj, minRating));
  res.json(result);
});

let orders = [{"orderId": 1, "customerName": "Rahul", "status": "shipped"},
              {"orderId": 2, "customerName": "Rajesh", "status": "pending"},
              {"orderId": 3, "customerName": "Amit", "status": "shipped"}];

function filterByStatus(orderObj, status)
{
  return orderObj.status === status;
}

app.get("/orders/status/:status",(req,res) => {
  let status = req.params.status;
  let result = orders.filter(orderObj => filterByStatus(orderObj, status));
  res.json(result);
});


const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});