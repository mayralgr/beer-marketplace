const dotenv = require("dotenv");
const App = require("./app");
const Connection = require("./db/db-connection");

dotenv.config();
const port = process.env.port || 3000;
const connectionString = process.env.CONNECTION_STRING;

//array of routes
const routes = [
  require("./routes/person.router"),
  require("./routes/beerOrder.router"),
  require("./routes/beer.router")
];

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
