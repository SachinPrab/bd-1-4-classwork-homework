const express = require('express');
const app = express();

let products = [{name: "Product A", inStock: true},
                {name: "Product B", inStock: false},
                {name: "Product C", inStock: true},
                {name: "Product D", inStock: false}];

function filterByInStock(productObj, inStock)
{
  return productObj.inStock;
}

app.get("/in-stock-products",(req,res) => {
  let result = products.filter(productObj => filterByInStock(productObj));
  res.json(result);
});

let users = [{name: "Alice", age: 25},
             {name: "Bob", age: 30},
             {name: "Charlie", age: 17},
             {name: "Dave", age: 16}];

function filterAdults(userObj)
{
  return userObj.age > 18;
}

app.get("/adult-users",(req,res) => {
  let result = users.filter(userObj => filterAdults(userObj));
  res.json(result);
});

let productPrices = [{name: "Product A", price: 50},
                     {name: "Product B", price: 150},
                     {name: "Product C", price: 200},
                     {name: "Product D", price: 90}];

function filterExpensiveProducts(productObj, price)
{
  return productObj.price > price;
}

app.get("/expensive-products",(req,res) => {
  let price = parseFloat(req.query.price);
  let result = productPrices.filter(productObj => filterExpensiveProducts(productObj, price));
  res.json(result);
});

let articles = [{title: "Article A", wordCount: 400},
                {title: "Article B", wordCount: 600},
                {title: "Article C", wordCount: 700},
                {title: "Article D", wordCount: 300}];

function filterLongArticles(articleObj, minWords)
{
  return articleObj.wordCount > minWords;
}

app.get("/long-articles",(req,res) => {
  let minWords = parseInt(req.query.minWords);
  let result = articles.filter(articleObj => filterLongArticles(articleObj, minWords));
  res.json(result);
});

let movies = [{title: "Movie A", rating: 8.5},
              {title: "Movie B", rating: 7.0},
              {title: "Movie C", rating: 9.0},
              {title: "Movie D", rating: 6.5}];

function filterHighRatedMovies(movieObj, rating)
{
  return movieObj.rating > rating;
}

app.get("/high-rated-movies",(req,res) => {
  let rating = parseFloat(req.query.rating);
  let result = movies.filter(movieObj => filterHighRatedMovies(movieObj, rating));
  res.json(result);
});

let employees = [
  { name: "Employee A", experience: 3 },
  { name: "Employee B", experience: 6 },
  { name: "Employee C", experience: 10 },
  { name: "Employee D", experience: 2 }
];

function filterExperiencedEmployees(employeeObj, experience) {
  return employeeObj.experience > experience;
}

app.get("/experienced-employees", (req, res) => {
  let experience = parseFloat(req.query.experience);
  let result = employees.filter(employeeObj => filterExperiencedEmployees(employeeObj, experience));
  res.json(result);
});

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});