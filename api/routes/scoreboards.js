// const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  CREATE_SCOREBOARD,
  EDIT_SCOREBOARD_NAME,
  EDIT_SCOREBOARD_DIRECTION,
  GET_ALL_SCOREBOARDS,
  GET_SCOREBOARD,
} = require("../controllers/scoreboards");

router.post("/createScoreboard", CREATE_SCOREBOARD);

router.put("/editScoreboardName", EDIT_SCOREBOARD_NAME);

router.put("/editScoreboardDirection", EDIT_SCOREBOARD_DIRECTION);

router.get("/getAllScoreboards", GET_ALL_SCOREBOARDS);

router.get("/getScoreboardById/:id", GET_SCOREBOARD);

module.exports = router;
