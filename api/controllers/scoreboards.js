const ScoreboardsSchema = require("../models/scoreboardsModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardsSchema({
    name: req.body.name,
    dateCreated: new Date(),
    results_ids: new Number(),
    scoreDirection: req.body.scoreDirection,
  });

  scoreboard.save().then((result) => {
    return res
      .status(200)
      .json({ response: "Scoreboard was created successfully" });
  });
};

module.exports.EDIT_SCOREBOARD_NAME = function (req, res) {
  ScoreboardsSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedScoreboardName }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Eddited successfully",
      editedScoreboardName: result,
    });
  });
};

module.exports.EDIT_SCOREBOARD_DIRECTION = async function (req, res) {
  const direction = await ScoreboardsSchema.findOne({
    _id: req.params.id,
  }).exec();

  // return res.status(200).json({ direction: direction });

  function editScoreboardDirection(direction) {
    switch (direction) {
      case "DESC":
        direction = "ASC";
        break;
      case "ASC":
        direction = "DESC";
    }
    return direction;
  }

  ScoreboardsSchema.updateOne(
    {
      _id: req.params.id,
    },
    {
      scoreboardDirection: editScoreboardDirection(
        direction.scoreboardDirection
      ),
    }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Direction edited successfully",
      scoreboardsDirection: result,
    });
  });
};

module.exports.GET_ALL_SCOREBOARDS = function (req, res) {
  ScoreboardsSchema.find()
    .sort("scoreboard")
    .then((results) => {
      return res.status(200).json({ scoreboards: results });
    });
};

module.exports.GET_SCOREBOARD_BY_ID = function (req, res) {
  ScoreboardsSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ scoreboards: results });
  });
};
