const express = require("express");
const app = express();

app.get("/check-bmi",(req,res) => 
  {
    let height = parseFloat(req.query.height);
    let weight = parseFloat(req.query.weight);
    let bmi = weight / (height * height);
    let result = "";

    if(bmi < 18.5)
    {
      result = "underweight";
    }
    else if(bmi < 24.9)
    {
      result = "normal weight";
    }
    else if(bmi < 29.9)
    {
      result = "over weight";
    }
    else
    {
      result = "obese";
    }
    res.send("BMI category is " + result);
  });

app.get("/check-performance",(req,res) => {
  let grade = parseFloat(req.query.grade);
  let result = "";
  if(grade >= 90)
  {
    result = "excellent";
  }
  else if(grade >= 75)
  {
    result = "good";
  }
  else if(grade >= 50)
  {
    result = "average";
  }
  else
  {
    result = "poor";
  }
  res.send("Academic performance is "+ result);
});

app.get("/check-age-group",(req,res) => 
  {
   let age = parseInt(req.query.age);
    if(age <= 12)
    {
      result = "child";
    }
    else if(age <= 17)
    {
      result = "teenager";
    }
    else if(age <= 64)
    {
      result = "adult";
    }
    else
    {
      result = "senior";
    }
    res.send("Age group is "+ result);
  });

app.get("/check-loan-eligibility",(req,res) => {
  let creditScore = parseInt(req.query.creditScore);
  let result;
  if(creditScore >= 750)
  {
    result = "high";
  }
  else if(creditScore >= 650)
  {
    result = "medium";
  }
  else
  {
    result = "low";
  }
  res.send("Loan eligibility is "+result);
});

app.get("/check-tax-bracket",(req,res) => 
  {
    let income = parseFloat(req.query.income);
    let result;
    if(income <= 500000)
    {
      result = "10% tax bracket";
    }
    else if(income <= 1000000)
    {
      result = "15% tax bracket";
    }
    else if(income <= 15000000)
    {
      result = "20% tax bracket";
    }
    else
    {
    result = "30% tax bracket";  
    }
    res.send("You fall under the "+result);
  });


const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});