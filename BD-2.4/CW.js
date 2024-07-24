const express = require("express");
const app = express();

let ages = [25, 30, 18, 22, 27];

function sortAgesAscending(age1, age2) {
  return age1 - age2;
}

app.get("/ages/sort-ascending", (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAgesAscending);
  res.json(agesCopy);
});

function sortAgesDescending(age1, age2) {
  return age2 - age1;
}

app.get("/ages/sort-descending", (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAgesDescending);
  res.json(agesCopy);
});

let marks = [
  { name: "Rahul", rollNo: 101, marks: 85 },
  { name: "Sita", rollNo: 102, marks: 95 },
  { name: "Amit", rollNo: 103, marks: 70 },
];

function sortStudentsByMarksDescending(marks1, marks2) {
  return marks2.marks - marks1.marks;
}

app.get("/students/sort-by-marks-descending", (req, res) => {
  let marksCopy = marks.slice();
  marksCopy.sort(sortStudentsByMarksDescending);
  res.json(marksCopy);
});

let cars = [
  { make: "Maruti", model: "Swift", mileage: 15 },
  { make: "Hyundai", model: "i20", mileage: 18 },
  { make: "Tata", model: "Nexon", mileage: 20 },
];

function sortCarsByMileageDescending(mileage1, mileage2)
{
  return mileage2.mileage - mileage1.mileage;
}

app.get("/cars/sort-by-mileage-descending",(req,res) => {
  let carsCopy = cars.slice();
  carsCopy.sort(sortCarsByMileageDescending);
  res.json(carsCopy);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
