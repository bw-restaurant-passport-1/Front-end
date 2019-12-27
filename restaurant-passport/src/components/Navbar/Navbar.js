import React from "react";
import styles from "../../styles/styles.css";
import {Link} from "react-router-dom";

const Navbar = () => {


    


    return (
        <nav className="nav_bar">
            <Link to="/dashboard" className="titlenav">Restaurant Passport</Link>
            <a>About</a>
            <a>Search</a>
            <a>Profile</a>
            <Link to="/">Sign Out</Link>
        </nav>

    )
}

export default Navbar;