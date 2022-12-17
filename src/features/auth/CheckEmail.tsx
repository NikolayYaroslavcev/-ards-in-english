import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import check from '../../assets/img/Check.svg'
import {useAppSelector} from "../../common/hooks/hooks";

export const CheckEmail = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLogged)
    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }
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

