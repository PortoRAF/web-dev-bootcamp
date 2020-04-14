const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there, welcome to my assignment!");
});

const animals = {
  pig: "Oink",
  cow: "Moo",
  dog: "Woof Woof!",
};

app.get("/speak/:animal", (req, res) => {
  let animal = req.params.animal.toLowerCase();
  if (animals[animal]) {
    res.send(`The ${animal} says ${animals[animal]}`);
  } else {
    res.status(404).send();
  }
});

app.get("/repeat/:message/:times", (req, res) => {
  let { message, times } = req.params;
  let result = "";
  for (let i = 0; i < times; i++) {
    result += message + " ";
  }
  res.send(result);
});

app.get("*", (req, res) => {
  res.send("Sorry, page not found...");
});

app.listen(process.env.PORT || 3000);
