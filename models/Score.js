const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    topTen: {
      type: Boolean,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Score = mongoose.model("Score", ScoreSchema);