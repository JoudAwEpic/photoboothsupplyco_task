// import essential modules
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// init the application
const app = express();

// import system routes
const { quoteRoute } = require("./routes");

// shape the data coming from requests (can be used to extend functionality of the app to let the user generate his own text with the image)
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

// Define headers in the request
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, language, timezone"
  );
  next();
});

// configure using of the env variables
dotenv.config();

// define the apis
app.use(`/`, quoteRoute);

// listen to port and start the application
const port = process.env.PORT || 3000;
app.listen(port);
