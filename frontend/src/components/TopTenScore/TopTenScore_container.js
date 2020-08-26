import { connect } from "react-redux";
import TopTenScore from "./TopTenScore.jsx";
import {getUser} from "../../actions/user_actions"

const mapStateToProps = (state) => ({
    userHandle: state.user.handle ? state.user.handle : "Loading Name...",
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTenScore);
