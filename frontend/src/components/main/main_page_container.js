import { connect } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { fetchQuestions } from "../../actions/questions_actions";
import { createScore } from "../../actions/score_actions";
import MainPage from "./main_page.jsx";

const mapStateToProps = (state) => ({
  questions: state.questions ? state.questions : [], // array
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchQuestions: () => dispatch(fetchQuestions()),
  createScore: (score) => dispatch(createScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
