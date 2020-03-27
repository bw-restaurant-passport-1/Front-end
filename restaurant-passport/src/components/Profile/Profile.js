import React, {useEffect} from "react";
import {FaEdit} from "react-icons/lib/fa";
import MdBorderColor from "react-icons/lib/md/border-color";
import MdCameraAlt from "react-icons/lib/md/camera-alt";
import { connect } from 'react-redux';
import profilePic from '../images/vector_user.jpg';

import { userReviewFetch } from "../../actions/index.js";

const Profile  =  (props) => {
    

    // const user ={
    //     username: "jacob1",
    //     location: "glendale, AZ",
    //     email: "jacob1@lambda.com"
    // }
    console.log(props.user,"a user?");

    useEffect(()=>{
      props.userReviewFetch();
    },[])


    return (
        <div className="profile">
            <div className="profile_img_div">
                <a className="profile_edit" src="#"><FaEdit color="white"/></a>
                <img className="profile_img" src={props.user.img ? props.user.img : profilePic }/>
            </div>


            <p>{props.user.username}</p>
            <p>{props.user.location}</p>
            <p>{props.user.email}</p>
            <div className="profile_member">
                <p>Member Since</p>
                <p>December 2019</p>
            </div>

            <div className="profile_options">
                <div><MdBorderColor/><span> {props.user.reviews ? props.user.reviews : "0"} Reviews</span></div>
                <div><MdCameraAlt/><span> {props.user.photos ? props.user.photos : "0"} Photos</span></div>
            </div>
        </div>
    )
}

//export default Profile;
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps, { userReviewFetch })(
  Profile
);