import React from 'react';

function Input (props) {
    return(
        <input className={props.inputClass} type={props.type} placeholder={props.placeholder}/>
    )
}

export default Input;