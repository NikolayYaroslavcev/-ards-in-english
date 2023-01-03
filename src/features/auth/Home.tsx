import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {Navigate, NavLink, useParams} from 'react-router-dom';
import {logOutTC} from './auth-reducer';
import {isLoggedSelector} from './authSelectors';
import {CardPage} from "../cards/CardPage";
import {Desk} from "../deck/Deck";

export const Home: React.FC = () => {
    const isLoggedIn = useAppSelector(isLoggedSelector)
    const userData = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()
    const onClickLogOut = () => {
        dispatch(logOutTC())
    }


    useEffect(() => {
        if (!isLoggedIn) return
    }, [])


    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div>
            <button onClick={onClickLogOut}>Log out</button>
            <Desk/>

            <div>
                <NavLink to={'/cards/'}>КАРТОЧКИ МОИ</NavLink>
            </div>
            <div>
                <NavLink to={'/friendsCards'}>КАРТОЧКИ ДРУЗЕЙ</NavLink>
            </div>
        </div>
    );
};


