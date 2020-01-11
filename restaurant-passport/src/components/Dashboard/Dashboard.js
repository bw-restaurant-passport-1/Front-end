import React, {useState, useEffect} from "react";

// import styled from "styled-components";
// import Navbar from "../Navbar/Navbar.js";

import Profile from "../Profile/Profile.js";
import RestaurantsDashboard from "../RestaurantsDashboard/RestaurantsDashboard.js";
import styles from "../../styles/styles.css";
import { connect } from 'react-redux';


 


const Dashboard = (props) => {
    const [currentUser, setCurrentUser] = useState();
    
    console.log(props.user);
    console.log(currentUser);
    // console.log('========')
    
    useEffect(()=>{
        const doIT = ()=>{
            //setCurrentUser(props.user);
            console.log(props.user, 'props user');
            console.log(currentUser,"the current");
            if(props.user==null){
            const theUser = JSON.parse(localStorage.getItem('user'));
            console.log(theUser,'local storage user')
            setCurrentUser(theUser);
    }
            
            setCurrentUser(props.user);
        }
        doIT();
    },[])








    
    

    return (
        <div className="main_container">
            {/* <Navbar /> */}
            <Profile user={currentUser} />
            <RestaurantsDashboard />
            
            {/* <Footer /> */}
        </div>
    )
}


const mapStateToProps = state => {
  return {
    signingUp: state.signingUp,
    user: state.user
  };
};
export default connect(mapStateToProps)(
  Dashboard
);