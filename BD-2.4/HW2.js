const express = require("express");
const app = express();

let books = [
  { title: "Moby Jonas", author: "Herman Melville", publication_year: 2023 },
  { title: "1984", author: "George Orwell", publication_year: 1984 },
  {
    title: "A Tale of Two Cities",
    author: "Charles Jonas",
    publication_year: 2000,
  },
];

function sortBooksByYear(year1, year2) {
  return year1.publication_year - year2.publication_year;
}

app.get("/books/sort-by-year", (req, res) => {
  let booksCopy = books.slice();
  booksCopy.sort(sortBooksByYear);
  res.json(booksCopy);
});

let employees = [
  { name: "John", salary: 75000 },
  { name: "Doe", salary: 30000 },
  { name: "Jane", salary: 50000 },
];

function sortEmployeesBySalary(salary1, salary2) {
  return salary2.salary - salary1.salary;
}

app.get("/employees/sort-by-salary", (req, res) => {
  let employeesCopy = employees.slice();
  employeesCopy.sort(sortEmployeesBySalary);
  res.json(employeesCopy);
});

let products = [
  { name: "Product A", price: 15 },
  { name: "Product B", price: 25 },
  { name: "Product C", price: 10 },
];

function sortProductsByPrice(price1, price2) {
  return price1.price - price2.price;
}

app.get("/products/sort-by-price", (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort(sortProductsByPrice);
  res.json(productsCopy);
});

let movies = [
  { title: "Movie A", rating: 9.0 },
  { title: "Movie C", rating: 7.0 },
  { title: "Movie B", rating: 8.5 },
];

function sortMoviesByRating(rating1, rating2)
{
  return rating2.rating - rating1.rating;
}

app.get("/movies/sort-by-rating",(req,res) => {
let moviesCopy = movies.slice();
  moviesCopy.sort(sortMoviesByRating);
  res.json(moviesCopy);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
