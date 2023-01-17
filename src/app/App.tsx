import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../common/hooks/hooks';
import {meTC} from '../features/auth/auth-reducer';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../features/auth/Home';
import {Registration} from '../features/auth/Registration';
import {Profile} from '../features/profile/Profile';
import {ForgotPassword} from '../features/auth/ForgotPassword';
import {CheckEmail} from '../features/auth/CheckEmail';
import {NewPassword} from '../features/auth/NewPassword';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Logging} from "../features/auth/Loggin";
import {CardPage} from "../features/cards/CardPage";
import {Desk} from "../features/deck/Deck";
import {CircularProgress} from "@mui/material";


function App() {
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const dispatch = useAppDispatch()
    const circularProgressStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    useEffect(() => {
        dispatch(meTC())
    }, [])

    if (!isInitialized) {
        return (
            <CircularProgress disableShrink sx={circularProgressStyle}/>
        )
    }
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/desks" element={<Desk/>}/>
                <Route path="/cards/:deskId" element={<CardPage/>}/>

                <Route path="/login" element={<Logging/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/forgot" element={<ForgotPassword/>}/>
                <Route path="/check" element={<CheckEmail/>}/>
                <Route path="/newPassword/:token" element={<NewPassword/>}/>
                <Route path="/404" element={<div>404. Page not found</div>}/>
                <Route path={'*'} element={<Navigate to="/404"/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
