const express = require('express');
const app = express();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ['Rahul', 'Sita', 'Amit', 'Vikram', 'Priya'];
let employees = [
  { employeeId: 1, name: 'Rahul' },
  { employeeId: 2, name: 'Sita' },
  { employeeId: 3, name: 'Amit' }
];

let contacts = [
  { phoneNumber: '1234567890', name: 'Rahul', address: '123 Street, City' },
  { phoneNumber: '0987654321', name: 'Sita', address: '456 Avenue, City' },
  { phoneNumber: '1112223334', name: 'Amit', address: '789 Boulevard, City' }
];

function findNumber(ele, number)
{
return ele === number;  
}

app.get("/numbers/find/:number",(req,res) => {
  let number = parseFloat(req.params.number);
  let result = numbers.find(ele => findNumber(ele, number));
  res.json(result);
});

function findName(ele, target)
{
  return ele.toLowerCase() === target.toLowerCase();
}

app.get("/names/find/:name",(req,res) => {
  let name = req.params.name;
  let result = names.find(ele => findName(ele, name));
  res.json(result);
});

function findEmployee(ele, employeeId)
{
  return ele.employeeId === employeeId;
}

app.get("/employees/find/:id",(req,res) => {
  let id = parseInt(req.params.id);
  let result = employees.find(ele => findEmployee(ele, id));
  res.json(result);
});

function findContactNumber(ele, number)
{
  return ele.phoneNumber === number;
}

app.get("/contacts/find/:phoneNumber",(req,res) => 
  {
    let phoneNumber = req.params.phoneNumber;
    let result = contacts.find(ele => findContactNumber(ele, phoneNumber));
    res.json(result);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});