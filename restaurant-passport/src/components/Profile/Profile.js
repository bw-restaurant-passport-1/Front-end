import React from "react";
import styled from "styled-components";
import {FaEdit} from "react-icons/lib/fa";
import MdBorderColor from "react-icons/lib/md/border-color";
import MdCameraAlt from "react-icons/lib/md/camera-alt";



const ProfileDiv = styled.div`
    width: 200px;
    display: inline-block;
    margin: 40px 60px;
    text-align: center;
    border-bottom: 10px solid #191970;
    font-family: 'Special Elite', cursive;
    font-size: 18px;
`;

const ProfileImg = styled.img`
    width: 180px;
    height: 180px;
`;

const MemberDiv = styled.div`
    margin-bottom: 1em;
`;

const MemberP = styled.p`
    margin: 0;
`;


const ImgDiv =styled.div`
    position: relative;
`;

const EditImgA = styled.a`
    position: absolute;
    right: 20px;
    top: 10px;
    fill: white;
    &:hover {
        cursor: pointer;
    }
`;

const RevPhotosDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const OptionDiv = styled.div`
    margin-bottom: 18px;
`;

const Profile  =  () => {


    return (
        <ProfileDiv>
            <ImgDiv>
                <EditImgA src="#"><FaEdit color="white"/></EditImgA>
                <ProfileImg src="https://avatars3.githubusercontent.com/u/54050896?s=460&v=4"/>
            </ImgDiv>

            <p>Name</p>
            <p>Chicago, IL</p>
            <p>david.c@gmail.com</p>
            <MemberDiv>
                <MemberP>Member Since</MemberP>
                <MemberP>December 2019</MemberP>
            </MemberDiv>

            <RevPhotosDiv>
                <OptionDiv><MdBorderColor/><span>{} Reviews</span></OptionDiv>
                <OptionDiv><MdCameraAlt/><span>{} Photos</span></OptionDiv>
            </RevPhotosDiv>
        </ProfileDiv>
    )
}


export default Profile;