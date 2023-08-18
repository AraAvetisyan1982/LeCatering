import React from "react";
import './tradition.scss'
import TraditionImg from '../assets/images/tradition.jpg'

const Tradition = () => {
    return(
    <div className="tradition">
        <img src={TraditionImg} alt="about" className="trafition_img"/>
        <div className="text">
            <h2 className="head">About Catering</h2>
            <span className="since">Tradition since 1889</span>
            <div className="text_block">
            <p className="bold">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
            <p className="light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>
    )
}

export default Tradition