import React, {useState} from "react";
// import styled from "styled-components";
// import Navbar from "../Navbar/Navbar.js";
import Profile from "../Profile/Profile.js";
import AddedRestaurants from "../AddedRestaurants/AddedRestaurants.js";
// import Footer from "../Footer/Footer.js";
// import styles from "../../styles/styles.css";

//Where data is held for state 


const Dashboard = ({data}) => {



    return (
        <div className="dashboard">
            {/* <Navbar /> */}
            <Profile />
            <AddedRestaurants />
            
            {/* <Footer /> */}
        </div>
    )
}


export default Dashboard