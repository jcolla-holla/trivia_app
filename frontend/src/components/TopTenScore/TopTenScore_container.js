import { connect } from "react-redux";
import TopTenScore from "./TopTenScore.jsx";
import {getUser} from "../../actions/user_actions"

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTenScore);
