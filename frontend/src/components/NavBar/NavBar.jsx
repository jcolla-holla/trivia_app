import React from "react";
import logo from "../../assets/logo_trustlayer.svg"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
      <div id="navbar">
        <img src={logo}></img>

        <div>
          {props.isAuthenticated ? (
            <Button onClick={() => props.logout()}>Logout</Button>
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