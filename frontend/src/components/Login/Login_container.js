import { connect } from "react-redux";
import {login} from "../../actions/session_actions"
import { clearErrors } from "../../actions/session_actions";
import Login from "./Login.jsx";

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  sessionErrors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
