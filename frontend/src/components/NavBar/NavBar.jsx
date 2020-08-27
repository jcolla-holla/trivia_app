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

        <div>
          <span>
            {/* shows user's email or Guest */}
            {props.isAuthenticated
              ? `Logged in as ${props.userEmail}`
              : "Logged in as Guest"}
          </span>


          {/* Log In/Logout Button */}
          {props.isAuthenticated ? (
            <Button onClick={() => handleLogout()}>Logout</Button>
          ) : (
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
          )}
        </div>
      </div>
    );
}

export default NavBar