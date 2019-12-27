import React from "react";
import {FaEdit} from "react-icons/lib/fa";
import MdBorderColor from "react-icons/lib/md/border-color";
import MdCameraAlt from "react-icons/lib/md/camera-alt";




const Profile  =  () => {

    const user ={
        username: "jacob1",
        location: "glendale",
        email: "jacob1@lambda.com"
    }


    return (
        <div className="profile">
            <div className="profile_img_div">
                <a className="profile_edit" src="#"><FaEdit color="white"/></a>
                <img className="profile_img" src={user.img ? user.img : "../../images/vector_user.jpg"}/>
            </div>


            <p>{user.username}</p>
            <p>{user.location}</p>
            <p>{user.email}</p>
            <div className="profile_member">
                <p>Member Since</p>
                <p>December 2019</p>
            </div>

            <div className="profile_options">
                <div><MdBorderColor/><span>{} Reviews</span></div>
                <div><MdCameraAlt/><span>{} Photos</span></div>
            </div>
        </div>
    )
}


export default Profile;