const express = require('express');
const app = express();

let cartItems = [
  { item: 'Book', price: 30 },
  { item: 'Pen', price: 5 },
  { item: 'Notebook', price: 50 },
  { item: 'Bag', price: 125 }
];

let students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'A' },
  { name: 'Jack', grade: 'B' },
  { name: 'Jill', grade: 'C' }
];

let temperatures = [0, 20, 30, 100];

let student_scores = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 90 },
  { name: 'Jack', score: 70 },
  { name: 'Jill', score: 60 }
];

let sentence = 'The quick brown fox jumps over the lazy dog';

function calculateTotalPrice(cartItems)
{
  let sum = 0;
  for(let i = 0; i < cartItems.length; i++)
    {
      sum += cartItems[i].price;
    }
  return sum;
}

app.get("/cart/total",(req,res) => {
  let result = calculateTotalPrice(cartItems);
  res.json({totalPrice: result});
});

function filterStudentsByGrade(students, grade)
{
  let result = [];
  for(let i = 0; i < students.length; i++)
    {
      if(students[i].grade === grade){
      result.push(students[i]);
    }
}
  return result;
}

app.get("/students/filter",(req,res) => {
  let grade = req.query.grade;
    let result = filterStudentsByGrade(students, grade);
  res.json({ students: result });
});


function convertCelsiusToFahrenheit(temperatures)
{
  let result = [];
  for(let i = 0; i < temperatures.length; i++)
    {
      let fahrenheit = (temperatures[i] * 9/5) + 32;
      result.push(fahrenheit);
    }
  return result;
}

app.get("/temperatures/convert",(req,res) => {
  let result = convertCelsiusToFahrenheit(temperatures);
  res.json({convertedTemperatures: result});
});

function calculateAverageScore(studentArray)
{
  let totalScore = 0;
  for(let i = 0; i < studentArray.length; i++)
    {
      totalScore += studentArray[i].score;
    }
  return totalScore / studentArray.length;
}

app.get("/students/average-score",(req,res) => {
  let averageScore = calculateAverageScore(student_scores);
  res.json({ averageScore });
});

function countWords(sentence)
{
  let wordCount = 1;
  for(let i = 0; i < sentence.length; i++)
    {
      if(sentence[i] === ' ')
      {
        wordCount = wordCount + 1;
      }
    }
  return wordCount;
}

app.get("/sentence/count-words",(req,res) => {
  let result = countWords(sentence);
  res.json({ wordCount: result });
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});