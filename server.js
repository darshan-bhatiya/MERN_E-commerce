const express = require('express')
const Pizzas = require('./models/pizzaModel');
const app = express()
app.use(express.json());
const port = 5000;
const db = require('./db');

const pizzasRouter = require('./routes/pizzasRoute');

app.use('/api/placepizza/', pizzasRouter);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))