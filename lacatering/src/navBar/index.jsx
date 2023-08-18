import React from "react";
import HeaderButton from "../components/headerButtons";
import './navBar.scss'

const NavBar = ( ) => {
    return (
        <div className="nav-container ">
            <HeaderButton text='Gourmet au Catering' />
            <div>
            <HeaderButton text='About'/>
            <HeaderButton text='Menu'/>
            <HeaderButton text='Contact'/>

            </div>
        </div>
    )
}

export default NavBar