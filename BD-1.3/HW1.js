const express = require("express");
const app = express();

app.get("/check-whole-number",(req,res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if(number >= 0)
  {
    result = "whole number";
  }
  else {
    result = "not whole number";
  }
  res.send("Number is "+result);
});

app.get("/check-equal",(req,res) =>
  {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    let result = "";
    if(num1 === num2)
    {
      result = "equal";
    }
    else
    {
      result = "not equal";
    }
    res.send("Numbers are "+result);
  });

app.get("/check-active",(req,res) => {
  let isActive = req.query.isActive === "true";
  let result = "";
  if(isActive)
  {
    result = "User is active";
  }
  else
  {
  result = "User is not active";  
  }
  res.send(result);
});

app.get("/check-discount",(req,res) => {
  let cost = parseFloat(req.query.cost);
  let result = "";
  if(cost > 1000)
  {
    result = "User is eligible for a discount";
  }
  else 
  {
    result = "User is not eligible for a discount";
  }
  res.send(result);
});

app.get("/check-experience",(req,res) => 
  {
   let workExperience = parseFloat(req.query.workExperience);
    let result = "";
    if(workExperience > 0)
    {
      result = "experienced";
    }
    else if(workExperience < 0)
    {
      result = "non-working";
    }
    else
    {
     result = "fresher"; 
    }
    res.send("Person is "+result);
  });

app.get("/check-result",(req,res) => {
  let result = parseFloat(req.query.result);
  let grade = "";
  if (result > 80)
  {
    grade = "A";
  }
  else if(result >= 50)
  {
    grade = "B";
  }
  else 
  {
    grade = "Fail";
  }
  res.send("The grade is "+ grade);
});

app.get("/check-attendance",(req,res) => 
  {
    let attendance = parseFloat(req.query.attendance);
    let result = "";
    if(attendance < 50)
    {
      result = "low";
    }
    else if(attendance <= 90)
    {
      result = "moderate";
    }
    else {
      result = "high";
    }
    res.send("Attendance is "+result);
  });

app.get("/check-rating",(req,res) =>
  {
    let stars = parseFloat(req.query.stars);
    let result = "";
    if(stars < 3)
    {
      result = "low";
    }
    else if(stars <= 4)
    {
      result = "medium";
    }
    else 
    {
      result = "high";
    }
    res.send("Restaurant rating is " + result);
  });

const PORT = 3000;
app.listen(PORT,() => 
  {
    console.log(`Server is running on http://localhost:${PORT}`);
  });