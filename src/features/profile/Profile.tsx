import React, {ChangeEvent, useEffect, useState} from 'react';
import edit from '../../assets/img/Edit.svg'
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {logOutTC, newNameTC} from '../auth/auth-reducer';
import {RegisterResType} from "../auth/auth-api";

export const Profile = () => {
    const [value, setValue]= useState<string>("")
    const isLoggedIn = useAppSelector(state => state.auth.isLogged)
    const userData = useAppSelector<RegisterResType>(state => state.profile)
    const dispatch = useAppDispatch()

    const onClickLogOut = () => {
        dispatch(logOutTC())
    }

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.value)
}
    const onClickHandler = ()=> {
        dispatch(newNameTC({name:value}))
    }

       return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <NavLink to="/">Back to Packs List</NavLink>
            <h3>Personal Information</h3>
            <div style={{width: '96px', height: '96px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '100%'}}
                     src="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-3.jpg" alt="photo"/>
            </div>
            <div style={{display: 'flex', columnGap: '10px', alignItems: 'center'}}>
                <p>{userData.name}</p>
                <div>
                    <img style={{}} src={edit} alt="edit"/>
                </div>
            </div>
            <div>
                {userData.email}
            </div>
            <button onClick={onClickLogOut}>Log out</button>
            <input value={value} onChange={onChangeHandler} type="text"/> <button onClick={onClickHandler}>+</button>
        </div>
    );
};

