const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/users", router); // localhost:5000/books

mongoose.connect("mongodb+srv://victorcalwin:Ovyaz1234@cluster0.bskfezq.mongodb.net/test")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
