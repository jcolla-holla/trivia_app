import { connect } from "react-redux";
import {
  getTopTenScores,
  createScore,
  updateScore
} from "../../actions/score_actions";
import {getUserScores} from "../../actions/user_actions"
import { fetchQuestions } from "../../actions/questions_actions"
import GameOver from "./GameOver.jsx";

const mapStateToProps = (state) => ({
    isAuthenticated: state.session.isAuthenticated,
    userId: state.session.user.id,
    topTen: state.scores.topTen
      ? state.scores.topTen.sort((a, b) => a.score - b.score)
      : [], //ordered array
    userScores: state.users.userScores.sort((a, b) => a.score - b.score).split(0,9),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  getTopTenScores: () => dispatch(getTopTenScores()),
  createScore: (score) => dispatch(createScore(score)),
  updateScore: (score) => dispatch(updateScore(score)),
  getUserScores: (userId) => dispatch(getUserScores(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
