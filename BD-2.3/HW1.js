const express = require('express');
const app = express();

let employees = [{"name": "Rahul Gupta", "department": "HR", "salary": 50000},
                 {"name": "Sneha Sharma", "department": "Finance", "salary": 60000},
                 {"name": "Priya Singh", "department": "Marketing", "salary": 55000},
                 {"name":"Amit Kumar", "department": "IT", "salary": 65000}];

function filterByDepartment(employeeObj, department)
{
  return employeeObj.department === department;
}

app.get("/employees/department/:department",(req,res) => {
  let department = req.params.department;
  let result = employees.filter(employeeObj => filterByDepartment(employeeObj, department
));
  res.json(result);
});

let bikes = [{make: "Hero", model: "Splendor", mileage: 80},
             {make: "Bajaj", model: "Pulsar", mileage: 60},
             {make: "TVS", model: "Apache", mileage: 70}];

function filterByMileage(bikeObj, maxMileage)
{
  return bikeObj.mileage > maxMileage;
}

app.get("/bikes/mileage/:maxMileage",(req,res) => {
  let maxMileage = parseFloat(req.params.maxMileage);
  let result = bikes.filter(bikeObj => filterByMileage(bikeObj,maxMileage));
  res.json(result);
});

let bikes2 = [{make: "Hero", model: "Splendor", mileage: 80},
              {make: "Bajaj", model: "Pulsar", mileage: 60},
              {make: "TVS", model: "Apache", mileage: 70}];

function filterByMake(bikeObj, make)
{
  return bikeObj.make === make;
}

app.get("/bikes/make/:make",(req,res) => {
  let make = req.params.make;
  let result = bikes2.filter(bikeObj => filterByMake(bikeObj, make));
  res.json(result);
});

let songs = [{title: "Tum Hi Ho", genre: "romantic", rating: 4},
             {title: "Senorita", genre: "pop", rating: 5},
             {title: "Dil Chahta Hai", genre: "Bollywood", rating: 3}];

function filterByRating(songObj, rating)
{
return songObj.rating > rating;  
}

app.get("/songs/rating/:minRating",(req,res) =>
  {
    let rating = parseFloat(req.params.minRating);
    let result = songs.filter(songObj => filterByRating(songObj, rating));
    res.json(result);
  });

function filterByGenre(songObj, genre)
{
  return songObj.genre === genre;
}

app.get("/songs/genre/:genre",(req,res) => {
  let genre = req.params.genre;
  let result = songs.filter(songObj => filterByGenre(songObj, genre));
  res.json(result);
});

let tasks = [{ taskId: 1, taskName: "Prepare Presentation", status: "pending"},
             { taskId: 2, taskName: "Attend Meeting", status: "in-progress"},
             { taskId: 3, taskName: "Submit Report", status: "completed"}];

function filterByStatus(taskObj, status)
{
  return taskObj.status === status;
}

app.get("/tasks/status/:status",(req,res) => {
  let status = req.params.status;
  let result = tasks.filter(taskObj => filterByStatus(taskObj, status));
  res.json(result);
});

const PORT = 3000;
app.listen(PORT,() =>
  {
    console.log(`Server is running at http://localhost:${PORT}`);
  });