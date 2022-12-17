import React, {ChangeEvent, useState} from 'react';
import editImg from '../../assets/img/Edit.svg'
import {Navigate, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {logOutTC, newNameTC} from '../auth/auth-reducer';
import {RegisterResType} from '../auth/auth-api';

export const Profile = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLogged)
    const userData = useAppSelector<RegisterResType>(state => state.profile)
    const dispatch = useAppDispatch()

    const [edit, setEdit] = useState<boolean>(false)
    const [newValue, setNewValue] = useState<string>(userData.name)


    const onClickLogOut = () => {
        dispatch(logOutTC())
    }


    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        setEdit(!edit)
    }
    const onClickSaveHandler = () => {
        dispatch(newNameTC({name: newValue}))
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
                {edit ? <input value={newValue} onChange={onChangeHandler} type="text"/> : <p>{userData.name}</p>}
                <div onClick={onClickHandler}>
                    {edit ? <button onClick={onClickSaveHandler}> Save</button> : <img src={editImg} alt="editImg"/>}
                </div>
            </div>
            <div>
                {userData.email}
            </div>

            <button onClick={onClickLogOut}>Log out</button>
            {/*<input value={value} onChange={onChangeHandler} type="text"/> <button onClick={onClickHandler}>+</button>*/}
        </div>
    );
};

