const express = require('express');
const app = express();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num)
{ let i;
  if(num <= 1)  return false;
  for (i = 2; i < num; i++)
    {
      if(num % i === 0)
        return false;
    }
      return true;
    }

function filterPrimeNumbers(num)
{
  return isPrime(num);
}

app.get("/prime-numbers",(req,res) => {
  let result = numbers.filter(num => filterPrimeNumbers(num));
  res.json(result);
});

let numbers2 =  [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function filterPositiveNumbers(num)
{
  return num > 0;
}

app.get("/positive-numbers",(req,res) => 
  {
    let result = numbers2.filter(num => filterPositiveNumbers(num));
    res.json(result);
  });

let numbers3 = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function filterNegativeNumbers(num)
{
  return num < 0;
}

app.get("/negative-numbers",(req,res) => {
  let result = numbers3.filter(num => filterNegativeNumbers(num));
  res.json(result);
});

let numbers_odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNumbers(num)
{
  return num % 2 !== 0;
}

app.get("/odd-numbers",(req,res) => {
  let result = numbers_odd.filter(num => filterOddNumbers(num));
  res.json(result);
});

let numbers4 = [1,2,3,4,5,6,7,8,9,10];

function filterNumbersGreaterThan(num,value)
{
  return num > value;
}

app.get("/numbers-greater-than",(req,res) => {
 let value = parseFloat(req.query.value);
  let result = numbers4.filter(num => filterNumbersGreaterThan(num,value));
  res.json(result);
});

let numbers5 = [1,2,3,4,5,6,7,8,9,10];

function filterNumbersLessThan(num,value)
{
  return num < value;
}

app.get("/numbers-less-than",(req,res) => {
  let value = parseFloat(req.query.value);
  let result = numbers5.filter(num => filterNumbersLessThan(num,value));
  res.json(result);
});

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
