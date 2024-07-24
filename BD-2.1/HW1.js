const express = require('express');
const app = express();

let book = {
"title": "The God of Small Things",
"author": "Arundhati Roy",
"publicationYear": 1997,
"genre": "Novel",
"isAvailable": true,
"stock": 5
}

app.get("/book",(req,res) => 
  {
    res.json(book);
  });

function getFullTitleAndAuthor(book)
{
  return book.title + " by " + book.author;
}

app.get("/book/fulltitle-author",(req,res) => 
  {
    let fullTitleAndAuthor = getFullTitleAndAuthor(book);
    res.json({fullTitleAndAuthor: fullTitleAndAuthor});
  });

function getGenreAvailability(book)
{
  return {
    genre: book.genre,
    isAvailable: book.isAvailable
  };
}

app.get("/book/genre-availability",(req,res) => 
  {
    let genreAvailability = getGenreAvailability(book);
    res.json(genreAvailability);
  });

function calculateBookAge(publicationYear)
{
  return 2024 - book.publicationYear;
};

app.get("/book/age",(req,res) =>{
  let bookAge = calculateBookAge(book.publicationYear);
  res.json({age: bookAge});
});

function getBookSummary(book)
{
  return "Title: " + book.title + ", Author: " + book.author + ", Genre: " + book.genre + ", Published: " + book.publicationYear;
}

app.get("/book/summary",(req,res) => {
  let bookSummary = getBookSummary(book);
  res.json({summary: bookSummary});
});

function checkStockAndOrder(book)
{
  if(book.stock > 0)
  {
    return { status: "In Stock", stock: book.stock };
  }
  else {
    return {status: "Out of Stock", message: "Order Required"}
  }
}

app.get("/book/stock-status",(req,res) => {
let StockAndOrder = checkStockAndOrder(book);
  res.json(StockAndOrder);
});

const PORT = 3000;
app.listen(PORT,() => 
  {
    console.log(`Server is running at http://localhost:${PORT}`);
  });