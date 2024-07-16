const express = require('express');
const app = express();

function generateProfileUrl(username)
{
  return "https://github.com/" + username;
}

app.get("/github-profile",(req,res) => 
  {
    let username = req.query.username;
    res.send(generateProfileUrl(username));
  });

function generateCertificate(firstName,lastName,course)
{
  return "This certification is awarded to " + firstName + " " + lastName + " for completing the course " + course;
}

app.get("/certificate",(req,res) => 
  {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let course = req.query.course;
    res.send(generateCertificate(firstName,lastName,course));
  });

function calculateGrade(math,science,english)
{
  let gradeInPercentage = ((math + science + english) / 300) * 100;
  return "Your grade in percentage is " + gradeInPercentage + "%";
}

app.get("/grade",(req,res) => 
  {
  let math = parseInt(req.query.math);
  let english = parseInt(req.query.english);
  let science = parseInt(req.query.science);
  res.send(calculateGrade(math,science,english));
  });

function splitBill(billAmount,numberOfFriends)
{
let splitAmount = billAmount / numberOfFriends;
  return "Result: Each friend owes ₹" + splitAmount + " against the bill.";
}

app.get("/split-bill",(req,res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  res.send(splitBill(billAmount,numberOfFriends).toString());
});

function calculateSalary(totalHours,hourlyWage)
{
  let monthlySalary = hourlyWage * totalHours;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}

app.get("/monthly-salary",(req,res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours,hourlyWage));
});

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is running at http://localhost:${PORT}`);
});