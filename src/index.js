const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

const indexRouter = require('./routes/index.router')
const beerRouter = require('./routes/beer.router')

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(indexRouter)
app.use("/api/beer",beerRouter)

//Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
