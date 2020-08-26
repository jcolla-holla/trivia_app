import { connect } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import {
  getTopTenScores,
  createScore,
  getScores,
} from "../../actions/score_actions";
import { fetchQuestions } from "../../actions/questions_actions"
import GameOver from "./GameOver.jsx";

const mapStateToProps = (state) => ({
    isAuthenticated: state.session.isAuthenticated,
    userId: state.session.user.id,
    topTen: state.scores.topTen
      ? state.scores.topTen.sort((a, b) => b.score - a.score)
      : [], //ordered array
    allScores: state.scores.allScores,

});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchQuestions: () => dispatch(fetchQuestions()),
  getTopTenScores: () => dispatch(getTopTenScores()),
  createScore: (score) => dispatch(createScore(score)),
  getScores: () => dispatch(getScores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
