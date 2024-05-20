const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Helper function to validate numbers and handle overflow/underflow
const validateNumbers = (num1, num2, result) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return { status: 'error', message: 'Invalid data types' };
    }
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
        return { status: 'error', message: 'Underflow' };
    }
    if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
        return { status: 'error', message: 'Overflow' };
    }
    return null;
};

// POST endpoint to get the sum of two numbers
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    const validationError = validateNumbers(num1, num2, result);

    if (validationError) {
        res.json(validationError);
    } else {
        res.json({ result });
    }
});

// POST endpoint to get the difference of two numbers
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    const validationError = validateNumbers(num1, num2, result);

    if (validationError) {
        res.json(validationError);
    } else {
        res.json({ result });
    }
});

// POST endpoint to get the multiplication of two numbers
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    const validationError = validateNumbers(num1, num2, result);

    if (validationError) {
        res.json(validationError);
    } else {
        res.json({ result });
    }
});

// POST endpoint to check if num2 is 0 and get the result after dividing two numbers
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        res.json({ status: 'error', message: 'Cannot divide by zero' });
    } else {
        const result = num1 / num2;
        const validationError = validateNumbers(num1, num2, result);

        if (validationError) {
            res.json(validationError);
        } else {
            res.json({ result });
        }
    }
});

const server = app.listen(4000, () => {
    console.log(`Server running on port 4000`);
});

module.exports = app;
