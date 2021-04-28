// created to separate the app logic from the index js
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors')

class App {
  constructor(port, routes) {
    this.app = express();
    this.port = port;
    // app.use() loads a function to be used as middleware
    this.app.use(express.static(path.join(__dirname, "public")));

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  initializeMiddlewares() {
    // Middlewares
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        credentials: true,
        "Access-Control-Allow-Credentials": true,
        methods: ["GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
        origin: "*",
      })
    );
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use("/api/v1/", route);
    });
  }

  listen() {
    return new Promise((resolve, reject) => {
      this.app
        .listen(this.port, () => {
          resolve();
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }
}

module.exports = App;
