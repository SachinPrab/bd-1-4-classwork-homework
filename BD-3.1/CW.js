const express = require('express');
const app = express();

let numbers = [1,2,3,4,5];

function addNumber(numbers, num)
{
  numbers.push(num);
  return numbers;
}

app.get("/numbers/add",(req,res) => {
  let result = addNumber(numbers, 6);
  res.json(result);
});

let strings = ['hello', 'world', 'javascript', 'node'];

function addString(strings, string)
{
  strings.push(string);
  return strings;
}

app.get("/strings/add",(req,res) => {
  let result = addString(strings, "express");
  res.json(result);
});


function sumNumbers(numbers)
{
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)
    {
      sum += numbers[i];
    }
  return sum;
}

app.get("/numbers/sum",(req,res) => {
  let result = sumNumbers(numbers);
  res.json(result);
});

function findMax(numArray)
{
  let max = numArray[0];
  for(let i = 1; i < numArray.length; i++)
    {
      if(numArray[i] > max)
      {
        max = numArray[i];
      }
    }
  return max;
}


app.get("/numbers/max",(req,res) => {
  let result = findMax(numbers);
  res.json({max: result});
});

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});