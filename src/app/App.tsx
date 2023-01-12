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


function App() {
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(meTC())
    }, [])

    if (!isInitialized) {
        return (
            <div>
                КРУТИЛКА
            </div>
        )
    }
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/desks" element={ <Desk/>}/>
                <Route path="/cards" element={ <CardPage/>}/>

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
