import React from 'react';
import logo from '../img/wood-stock-logo.png';

function Logo (props) {
    return (
        <img src={logo} className={props.classImg} />
    )
}

export default Logo;