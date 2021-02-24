
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

const indexRouter = require('./routes/index.router')
const beerRouter = require('./routes/beer.router')
const personRouter = require('./routes/person.router')

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(indexRouter)
app.use("/api/v1/beer",beerRouter)
app.use("/api/v1/person",personRouter)

//Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });

const dotenv = require("dotenv");
const App = require("./app");
const Connection = require("./db/db-connection");

dotenv.config();
const port = process.env.port || 3000;
const connectionString = process.env.CONNECTION_STRING;

//array of routes
const routes = [require('./routes/test.router'),
                require('./routes/beers.router'),
]

const app = new App(port, routes);

const database = new Connection(connectionString);


database
  .connect()
  .then(() => {
    console.log("Database connected successfully");
    return app.listen();
  })
  .then(() => {
    console.log(`App running in port ${port}`);
  })
  .catch((error) => {
    console.log(error);
  });
