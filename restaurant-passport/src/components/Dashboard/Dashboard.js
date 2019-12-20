import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar.js";
import Profile from "../Profile/Profile.js";
import AddedRestaurants from "../AddedRestaurants/AddedRestaurants.js";
//Where data is held for state 


const Dashboard = () => {



    return (
        <div>
        <Navbar />
        <Profile />
        <AddedRestaurants />
        

        </div>
    )
}


export default Dashboard