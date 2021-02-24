// package required
const mongoose = require("mongoose");
// class for db connection
class DatabaseConnection {
  constructor(connectionString) {
    this.connectionString = connectionString;
    const database = mongoose.connection;
    // To handle errors after initial connection was established, 
    //you should listen for error events on the connection. ¡
    database.on(
      "error",
      console.error.bind(console, "MongoDB connection error")
    );
  }

  connect() {
    return mongoose.connect(this.connectionString, {
      useNewUrlParser: true, // useNewUrlParser: true unless that prevents you from connecting. Note that if you specify useNewUrlParser: true, you must specify a port in your connection string
      useUnifiedTopology: true, // Set to true to opt in to using the MongoDB driver's new connection management engine. 
      useCreateIndex: true, // Set to true to make Mongoose's default index build use
    });
  }
}

module.exports = DatabaseConnection;