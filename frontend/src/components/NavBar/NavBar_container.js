import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./NavBar.jsx";

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  userEmail: state.session.user ? state.session.user.email : {},
  userHandle: state.session.user ? state.session.user.handle : {},
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
