import React from 'react';
import {NavLink} from 'react-router-dom';
import check from '../../assets/img/Check.svg'

export const CheckEmail = () => {


    return (
        <div>
            <div>Check Email</div>
            <div>
                <img src={check} alt="check"/>
            </div>
            <p>We’ve sent an Email with instructions to example@mail.com</p>
            <NavLink to="/login">Back to login</NavLink>
        </div>
    );
};

