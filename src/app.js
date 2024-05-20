const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Write POST endpoint to get the sum of two number


//Write POST endpoint to get the differance of two number


//Write POST endpoint to get the multiplication of two number


//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number

      

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
    
module.exports = app;
