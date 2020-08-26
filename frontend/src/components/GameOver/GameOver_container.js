import { connect } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import {
  getTopTenScores,
  createScore,
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
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchQuestions: () => dispatch(fetchQuestions()),
  getTopTenScores: () => dispatch(getTopTenScores()),
  createScore: (score) => dispatch(createScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
