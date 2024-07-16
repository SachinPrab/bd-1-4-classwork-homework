const express = require('express');
const app = express();

function getWelcomeMessage() {
  return "We will now learn functions!";
}

app.get("/welcome",(req,res) => 
  {
    res.send(getWelcomeMessage());
  });

function getGreetingMessage(username)
{
return "Hey, " + username +"! Are you ready to learn functions with us?"   
}

app.get("/greet",(req,res) => 
  {
    let username = req.query.username;
    res.send(getGreetingMessage(username));
  });

function checkYearsOfExp(yearsOfExp)
{
  if(yearsOfExp > 0)
  {
    return "You have some experience with functions. Great!"
  }
  else
  {
    return "No worries. You will start writing functions in no time!"
  }
}

app.get("/message",(req,res) => 
  {
    let yearsOfExp = parseFloat(req.query.yearsOfExp);
    res.send(checkYearsOfExp(yearsOfExp).toString());
  });

function getTime(days,hours)
{
return days * hours;  
}

app.get("/hours",(req,res) => 
  {
    let days = parseFloat(req.query.days);
    let hours = parseFloat(req.query.hours);
    res.send(getTime(days,hours).toString());
  });

function getModuleCompletion(username,hasCompleted)
{
  if(hasCompleted)
  {
    return username + " has completed the modules";
  }
  else
  {
    return username + " has not completed the modules";
  }
}
app.get("/module-completion-status",(req,res) => {
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted === "true";
  res.send(getModuleCompletion(username,hasCompleted));
});

function getPersonalizedGreeting(city,name)
{
  return "Hey, " + name + "!" + " What's famous about " + city + "?";
}

app.get("/personalized-greeting",(req,res) => 
  {
    let city = req.query.city;
    let name = req.query.name;
    res.send(getPersonalizedGreeting(city,name));
  });

function findAge(birthYear)
{
  return 2024 - birthYear;
}

app.get("/find-age",(req,res) => 
  {
    let birthYear = parseInt(req.query.birthYear);
    res.send(findAge(birthYear).toString());
  });

function findRequiredTime(days,hours)
{
  let time = days * hours;
  if(time >= 30)
  {
    return "The time being dedicated is sufficient for learning functions";
  }
  else
  {
    return "The time being dedicated is not sufficient for learning functions";
  }
}

app.get("/is-time-sufficient",(req,res) => 
  {
    let days = parseFloat(req.query.days);
    let hours = parseFloat(req.query.hours);
    res.send(findRequiredTime(days,hours).toString());
  });

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server is running at http://localhost:${PORT}`);
});