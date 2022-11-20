const express = require("express");
const router = express.Router();
const {
  CREATE_SCORE,
  EDIT_TITLE,
  GET_ALL_RESULTS,
  GET_ALL_RESULTS_BY_SCOREBOARD_ID,
} = require("../controllers/scoreboardResult");

router.post("/createScor", CREATE_SCORE);

router.put("/editTitle/:id", EDIT_TITLE);

router.get("/getAllResults", GET_ALL_RESULTS);

router.get(
  "/getAllResultsByScoreboardId/:id",
  GET_ALL_RESULTS_BY_SCOREBOARD_ID
);

module.exports = router;
