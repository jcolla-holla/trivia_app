import { connect } from "react-redux";
import { clearErrors } from "../../actions/session_actions";
import Questions from "./questions.jsx";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
