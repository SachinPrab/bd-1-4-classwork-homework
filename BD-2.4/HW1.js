const express = require("express");
const app = express();

let heights = [160, 175, 180, 165, 170];

function sortHeightsAscending(height1, height2) {
  return height1 - height2;
}

app.get("/heights/sort-ascending", (req, res) => {
  let heightsCopy = heights.slice();
  heightsCopy.sort(sortHeightsAscending);
  res.json(heightsCopy);
});

function sortHeightsDescending(height1, height2) {
  return height2 - height1;
}

app.get("/heights/sort-descending", (req, res) => {
  let heightsCopy = heights.slice();
  heightsCopy.sort(sortHeightsDescending);
  res.json(heightsCopy);
});

let salary = [
  { name: "Rahul", employeeId: 101, salary: 50000 },
  { name: "Sita", employeeId: 102, salary: 60000 },
  { name: "Amit", employeeId: 103, salary: 45000 },
];

function sortByEmployeesSalaryDescending(salary1, salary2) {
  return salary2.salary - salary1.salary;
}

app.get("/employees/sort-by-salary-descending", (req, res) => {
  let salaryCopy = salary.slice();
  salaryCopy.sort(sortByEmployeesSalaryDescending);
  res.json(salaryCopy);
});

let books = [
  { title: "The God Of Small Things", author: "Arundhati Roy", pages: 340 },
  { title: "The White Tiger", author: "Aravind Adiga", pages: 321 },
  { title: "The Palace Of Illusions", author: "Chitra Banerjee", pages: 360 },
];

function sortBooksByPagesAscending(book1, book2) {
  return book1.pages - book2.pages;
}

app.get("/books/sort-by-pages-ascending",(req,res) => {
  let booksCopy = books.slice();
  booksCopy.sort(sortBooksByPagesAscending);
  res.json(booksCopy);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
