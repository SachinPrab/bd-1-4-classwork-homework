const express = require('express');
const app = express();

let numbers = [1,2,3,4,5,6,7,8,9,10];

function filterEvenNumbers(num)
{
  return num % 2 === 0;
}

app.get("/even-numbers",(req,res) => 
  {
    let result = numbers.filter(num => filterEvenNumbers(num));
    res.json(result);
  });

let ages =  [10, 20, 30, 15, 17, 25];
function filterAgesGreaterThan18(age)
{
  return age > 18;
}

app.get("/adult-ages",(req,res) => 
  {
   let result = ages.filter(age => filterAgesGreaterThan18(age));
    res.json(result);
  });

let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

function filterLongWords(word)
{
  return word.length > 5;
}

app.get("/long-words",(req,res) => 
  {
    let result = words.filter(word => filterLongWords(word));
    res.json(result);
  });

let fileSizes = [50, 200, 75, 120, 30, 90, 150];
function filterSmallFiles(size)
{
  return size < 100;
}

app.get("/small-files",(req,res) => {
  let result = fileSizes.filter(size => filterSmallFiles(size));
  res.json(result);  
});

const PORT = 3000;
app.listen(PORT,() => 
  {
    console.log(`Server is running at http://localhost:${PORT}`);
  })