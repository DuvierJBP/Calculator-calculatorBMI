const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  console.log(req.body);

  const num1 = req.body.number1;
  const num2 = req.body.number2;

  const result = Number(num1) + Number(num2);

  res.send("the add between " + num1 + " and " + num2 + " is: " + result);
});

app.post("/bmicalculator", function (req, res) {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);

  const result = weight / Math.pow(height, 2);

  res.send("Your BMI is: " + result);
});

app.listen(3000, function () {
  console.log("The server is running in port 3000");
});

fs.copyFileSync("calculator.js", "calculator2.js");
