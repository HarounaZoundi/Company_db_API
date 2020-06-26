const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./config/config");
require("dotenv").config();
const PORT = process.env.PORT ;

app.use(bodyParser.json());

// Connecting to the database
db.authenticate()
  .then(() => {
    return console.log("Database connected ... ");
  })
  .catch((err) => {
    return console.error("Connection ERROR:", err);rs
  });
db.sync();

app.get("/", (req, res) => {
  res.send("The sever is live...");
  console.log("The sever is live...");
});
app.use("/employees", require("./routers/employee"));

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}...`))
