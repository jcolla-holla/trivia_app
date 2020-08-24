import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import { fetchQuestions } from "../../actions/questions_actions";
import MainPage from "./main_page.jsx";

const mapStateToProps = (state) => ({
  errors: state.errors.session, // array
  questions: state.questions // object
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
