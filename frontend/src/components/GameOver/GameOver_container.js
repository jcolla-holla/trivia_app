import { connect } from "react-redux";
import {
  getTopTenScores,
  createScore,
  updateScore
} from "../../actions/score_actions";
import { fetchQuestions } from "../../actions/questions_actions"
import GameOver from "./GameOver.jsx";

const mapStateToProps = (state) => ({
    isAuthenticated: state.session.isAuthenticated,
    userId: state.session.user.id,
    topTen: state.scores.topTen
      ? state.scores.topTen.sort((a, b) => a.score - b.score)
      : [], //ordered array
    allScores: state.scores.allScores,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  getTopTenScores: () => dispatch(getTopTenScores()),
  createScore: (score) => dispatch(createScore(score)),
  updateScore: (score) => dispatch(updateScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
