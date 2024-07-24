const express = require('express');
const app = express();

let person = {
  firstName: "Amit",
  lastName: "Sharma",
  gender: "male",
  age: 30,
  isMember: true
};

app.get("/person",(req,res) => 
  {
    res.json(person);
  });

function getFullName(person)
{
  return person.firstName + " " + person.lastName;
}
app.get("/person/fullname",(req,res) => {
  let fullName = getFullName(person);
  res.json({fullName: fullName});
});

function getFirstNameAndGender(person)
{
  return {
    firstName: person.firstName,
    gender: person.gender
  };  
}

app.get("/person/firstname-gender",(req,res) => 
  {
    let firstNameAndGender = getFirstNameAndGender(person);
    res.json(firstNameAndGender);
  });

function getUpdatedAge(person)
{
  person.age = person.age + 1;
  return person;
}

app.get("/person/increment-age",(req,res) => 
  {
    let updatedAge = getUpdatedAge(person);
    res.json(updatedAge);
  });

function getFullNameAndMembership(person) {
  return {
    fullName: getFullName(person),
    isMember: person.isMember  
  };
}

app.get("/person/fullname-membership",(req,res) => {
  let fullNameAndMembership = getFullNameAndMembership(person);
  res.json(fullNameAndMembership);
});

function getFinalPrice(cartTotal, isMember) {
  let finalPrice = 0;
  if (isMember) {
    finalPrice = cartTotal - (cartTotal * (10 / 100));
  } else {
    finalPrice = cartTotal;
  }
  return { finalPrice: finalPrice.toFixed(2) };
}

app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  if (isNaN(cartTotal)) {
    return res.status(400).json({ error: "Invalid cartTotal" });
  }
  let finalPrice = getFinalPrice(cartTotal, person.isMember);
  res.json(finalPrice);
});

function getShippingCost(cartTotal,isMember)
{
  let shippingCost = 0;
  if(cartTotal > 500 && isMember)
  {
    shippingCost = 0;
  }
  else
  {
    shippingCost = 99;
  }
  return {shippingCost: shippingCost.toFixed(2)};
};

app.get("/person/shipping-cost",(req,res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let shippingCost = getShippingCost(cartTotal,person.isMember);
  res.json(shippingCost);
});

app.get("/")
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});