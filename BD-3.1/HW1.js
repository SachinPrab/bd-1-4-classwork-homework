const express = require('express');
const app = express();

let numbers = [1,2,3,4,5];

function multiplyNumber(numArray,multiplier)
{
 let result = [];
  for(let i = 0; i < numArray.length; i++)
    {
      result.push(numArray[i] * multiplier);
    }
  return result;
}

app.get("/numbers/multiply",(req,res) => {
  let multiplier = parseFloat(req.query.multiplier);
  let result = multiplyNumber(numbers, multiplier);
  res.json({result: result});
});

let strings = ['hello', 'world', 'javascript', 'node'];

function concatStrings(stringArray, suffix)
{
  let result = [];
  for(let i = 0; i < stringArray.length; i++)
    {
      result.push(stringArray[i] + suffix);
    }
  return result;
}

app.get("/strings/concat",(req,res) => {
  let suffix = req.query.suffix;
  let result = concatStrings(strings, suffix);
  res.json({result: result});
});

function removeOddNumbers(numArray)
{
  let result = [];
  for(let i = 0; i < numArray.length; i++)
    {
      if(numArray[i] % 2 === 0)
      {
        result.push(numArray[i])
      }
    }
  return result;
}

app.get("/numbers/remove-odds",(req,res) => {
  let result = removeOddNumbers(numbers);
  res.json({result: result});
});

function joinStrings(stringArray)
{
  let result = '';
  for (let i = 0; i < stringArray.length; i++)
    {
      result = result + " " + stringArray[i];
    }
  return result;
}

app.get("/strings/join",(req,res) => {
  let result = joinStrings(strings);
  res.json({result: result});
});

function doubleNumbers(numArray)
{
  let result = [];
  for(let i = 0; i < numArray.length; i++)
    {
      result.push(numArray[i] * 2);
    }
  return result;
}

app.get("/numbers/double",(req,res) => {
  let result = doubleNumbers(numbers);
  res.json({result: result});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});