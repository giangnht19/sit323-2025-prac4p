const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON requests
app.use(express.json());

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!isValidNumber(num1, num2)) return res.status(400).send('<h1>Error: Invalid input. Provide two valid numbers.</h1>');
    res.send(`<h1>Result: ${parseFloat(num1) + parseFloat(num2)}</h1>`);
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!isValidNumber(num1, num2)) return res.status(400).send('<h1>Error: Invalid input. Provide two valid numbers.</h1>');
    res.send(`<h1>Result: ${parseFloat(num1) - parseFloat(num2)}</h1>`);
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!isValidNumber(num1, num2)) return res.status(400).send('<h1>Error: Invalid input. Provide two valid numbers.</h1>');
    res.send(`<h1>Result: ${parseFloat(num1) * parseFloat(num2)}</h1>`);
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!isValidNumber(num1, num2)) return res.status(400).send('<h1>Error: Invalid input. Provide two valid numbers.</h1>');
    if (parseFloat(num2) === 0) return res.status(400).send('<h1>Error: Cannot divide by zero.</h1>');
    res.send(`<h1>Result: ${parseFloat(num1) / parseFloat(num2)}</h1>`);
});

function isValidNumber(num1, num2) {
    return !isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2));
}

app.get('/', (req, res) => {
    res.send(`Server is running`);
})

app.listen(port, () => {
    console.log(`Microservice running at http://localhost:${port}`);
})