import { connect } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { fetchQuestions } from "../../actions/questions_actions"
import GameOver from "./GameOver.jsx";

const mapStateToProps = (state) => ({
  errors: state.errors.session, // array
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
