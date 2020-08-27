const express = require("express");
const router = express.Router();
const passport = require("passport");

const Score = require("../../models/Score");
// note: no validations for Scores because user won't be inputting any data, this is NOT good practice from security perspective

// create new Score - protected endpoint
router.post("/",passport.authenticate("jwt", { session: false }), (req, res) => {    
    const newScore = new Score({
      score: req.body.score,
      userId: req.body.userId,
      topTen: req.body.topTen
    });
    newScore.save().then((score) => res.json(score));
  }
);

//get all Scores - this isn't necessary and represents a security flaw but possibly helpful for testing purposes
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

// update score -- used only for updating the topTen key when a new topTen score is saved
router.put("/:id", (req, res) => {
  Score.updateOne(
    { _id: req.params.id },
    { topTen: req.body.topTen },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
});

module.exports = router;
