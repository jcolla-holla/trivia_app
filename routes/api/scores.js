const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

router.get("/test", (req, res) => res.json({ msg: "This is the scores route" }));

const Score = require("../../models/Score");
// note: no validations for Scores because user won't be inputting any data

// create new Score - protected endpoint
router.post("/",passport.authenticate("jwt", { session: false }), (req, res) => {
    // const { errors, isValid } = validateTweetInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    // req.body.userId may not be quite right
    const newScore = new Score({
      score: req.body.score,
      userId: req.body.userId,
      topTen: req.body.topTen
    });

    newScore.save().then((score) => res.json(score));
  }
);

//get all Scores
router.get("/", (req, res) => {
  Score.find()
    .then((scores) => res.json(scores))
    .catch((err) => res.status(404).json({ noScoresFound: "No scores found" }));
});

//get top ten scores
router.get("/topTen", (req, res) => {
  Score.find({topTen: true})
    .then((scores) => res.json(scores))
    .catch((err) => res.status(404).json({ noScoresFound: "No scores found" }));
});

module.exports = router;
