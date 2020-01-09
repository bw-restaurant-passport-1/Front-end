import React, {useState, useEffect} from "react";
import Profile from "../Profile/Profile.js";
import RestaurantsDashboard from "../RestaurantsDashboard/RestaurantsDashboard.js";
import styles from "../../styles/styles.css";


 




const Dashboard = (props) => {

    //Where data is held for state

    

    const [user, setUser] = useState();


    
    

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