import React, {ChangeEvent, useState} from 'react';
import editImg from '../../assets/img/Edit.svg'
import {Navigate, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {logOutTC, newNameTC} from '../auth/auth-reducer';
import {isLoggedSelector} from '../auth/authSelectors';
import avatar from '../../assets/img/minon.jpg'
import logout from '../../assets/img/logout.svg'
import arrow from '../../assets/img/arrow.svg'
import {
    StyledButtonEdit,
    StyledEmailEdit,
    StyledNavigateProfile,
    StyledWrapperEdit,
    StyledWrapperProfile
} from '../../common/components/style/сartStyled';
import {StyledWrapperImageProfile} from "../../common/components/style/inage/StyledWrapperImageProfile";

export const Profile = () => {
    const isLoggedIn = useAppSelector(isLoggedSelector)
    const userData = useAppSelector(state => state.profile)
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
        <div>
            <StyledNavigateProfile>
                <NavLink to="/"><img src={arrow} alt="arrow"/>Back to Packs List</NavLink>
            </StyledNavigateProfile>
            <StyledWrapperProfile>
                <h2>Personal Information</h2>
                <StyledWrapperImageProfile>
                    <img src={avatar}
                         alt="avatar"/>
                </StyledWrapperImageProfile>
                <StyledWrapperEdit>
                    {edit ? <input value={newValue} onChange={onChangeHandler} type="text"/> :
                        <p>{userData.name}</p>}
                    <div onClick={onClickHandler}>
                        {edit ? <button onClick={onClickSaveHandler}> Save</button> :
                            <img src={editImg} alt="editImg"/>}
                    </div>
                </StyledWrapperEdit>
                <StyledEmailEdit>
                    {userData.email}
                </StyledEmailEdit>
                <StyledButtonEdit>
                    <button onClick={onClickLogOut}><img src={logout} alt="logout"/> Log out</button>
                </StyledButtonEdit>
            </StyledWrapperProfile>
        </div>
    );
};

