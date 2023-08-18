import React from 'react';
import './button.scss'

function HeaderButton(props) {
    return (
        <button className='headerLink'>{props.text}</button>
    )
}

export default HeaderButton