import React from "react";
import './burger.scss';
import HeaderImg from '../../assets/images/titleimg.jpg'
const Burger = () => {
    return (
        <div className="burger-container">
            <img src={HeaderImg} alt="burgeri nkar" className="burger " width="100%" height="100%"/>
            <h1 className="main_title">La Catering</h1>
        </div>
    )
}

export default Burger