import React, {useState} from "react";
// import styled from "styled-components";
// import Navbar from "../Navbar/Navbar.js";
import Profile from "../Profile/Profile.js";
import RestaurantsDashboard from "../RestaurantsDashboard/RestaurantsDashboard.js";
import Footer from "../Footer/Footer.js";
import styles from "../../styles/styles.css";

//Where data is held for state 


const Dashboard = ({data}) => {



    return (
        <div className="main_container">
            {/* <Navbar /> */}
            <Profile />
            <RestaurantsDashboard />
            
            {/* <Footer /> */}
        </div>
    )
}


export default Dashboard