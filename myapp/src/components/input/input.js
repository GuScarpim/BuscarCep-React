import React from 'react';
import { MDBInput } from 'mdbreact';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './input.css';

const Input = (props) => {
    return (
        <div>
            <MDBInput label={props.label} type={props.type} value={props.value} valueDefault={props.defaultValue}
                onChange={props.onChange} maxLength={props.maxLength} id={props.id}
                icon={props.icon} onIconClick={props.onIconClick} onBlur={props.onBlur}/>
        </div>
    )
}

export default Input;
