import { connect } from "react-redux";
import { clearErrors } from "../../actions/session_actions";
import Questions from "./questions.jsx";

const mapStateToProps = (state) => ({
  errors: state.errors.session, // array
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
