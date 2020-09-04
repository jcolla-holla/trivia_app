import React from "react";
import logo from "../../assets/logo_trustlayer.svg"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavBar = (props) => {

    const handleLogout = () => {
      props.setIsDemoUser(true)
      props.logout()
    }

    return (
      <div id="navbar">
        <img src={logo}></img>

        {/* only render login button if user is on desktop */}
        {!props.isOnMobile && 
        <div>
          <span>
            {/* shows user's email or Guest */}
            {props.isAuthenticated
              ? props.userEmail
                ? `Logged in as ${props.userEmail}`
                : `Logged in as ${props.userHandle}`
              : "Logged in as Guest"}
          </span>

          {/* Log In/Logout Button */}
          {props.isAuthenticated ? (
            <Button disabled={props.gameOver} onClick={() => handleLogout()}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
          )}
        </div>
        }
      </div>
    );
}

export default NavBar