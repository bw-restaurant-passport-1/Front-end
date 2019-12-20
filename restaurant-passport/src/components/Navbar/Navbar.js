import React from "react";
import styled from 'styled-components';



const NavDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    align-items: center;
    font-family: 'Raleway', sans-serif;


`;
const TitleA = styled.a`
    color: #DAA520;
    flex-basis: 60%;
    font-size: 2rem;
    font-family: 'Girassol', cursive;
    text-transform: Uppercase;


`;
const LinksA = styled.a`
    color: #191970;

    &:hover {

        cursor:pointer;
        color: black;
    };
`;

const Navbar = () => {


    


    return (
        <NavDiv>
            <TitleA>Restaurant Passport</TitleA>
            <LinksA>About</LinksA>
            <LinksA>Search</LinksA>
            <LinksA>Profile</LinksA>
            <LinksA>Sign Out</LinksA>
        </NavDiv>

    )
}

export default Navbar;