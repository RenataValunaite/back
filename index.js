const express = require("express");
const bodyParser = require("body-parser");
const scoreboardsRoutes = require("./api/routes/scoreboards");
const scoreboardResultRoutes = require("./api/routes/scoreboardResult");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => {
    console.log("xxxxxxxxxxxxxxxxxx");
    console.log(err);
  });

app.use(scoreboardsRoutes);
app.use(scoreboardResultRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.put("/editScoreboardName/:id", function (req, res) {
//   const index = scoreboards.findIndex(
//     (scoreboardName) => scoreboardName.id === req.params.id
//   );
//   scoreboards[2].scoreboardName = req.body.editedScoreboardName;
//   return res
//     .status(200)
//     .json({ response: "Scoreboard was created successfully" });
// });

app.listen(3000);
