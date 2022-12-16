import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {Navigate} from 'react-router-dom';

export const Home = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLogged)
    const dispatch = useAppDispatch()

       useEffect(() => {
        if (!isLoggedIn) return
    }, [])

    if (!isLoggedIn) {
        return <Navigate to={'/login/'}/>
    }

    return (
        <div>
            Главная старница
        </div>
    );
};


