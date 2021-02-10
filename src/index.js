const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// router
const testRouter = require('./routes/test.router');
const beerRouter = require('./routes/beers.router');

const app = express();
const port = process.env.port || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// routes
app.use('/api',testRouter);
app.use('/api/beer',beerRouter);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
})