import React, {useEffect} from 'react';
import './App.css';
import {Registration} from './features/auth/Registration';
import {Logging} from './features/auth/Logging';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from './features/profile/Profile';
import {Home} from './features/auth/Home';
import {useAppDispatch, useAppSelector} from './common/hooks/hooks';
import {meTC} from './features/auth/auth-reducer';
import {ForgotPassword} from './features/auth/ForgotPassword';


function App() {

    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(meTC())
    }, [])

    if (!isInitialized) {
        return (
            <div style={{position: 'fixed', top: '30%', width: '100%', textAlign: 'center'}}>
                КРУТИЛКА
            </div>
        )
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Navigation/>*/}
                <Route path="/login" element={<Logging/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/forgot" element={<ForgotPassword/>}/>
                <Route path="/404" element={<div>404. Page not found</div>}/>
                <Route path={'*'} element={<Navigate to="/404"/>}/>
            </Routes>
        </div>
    );
}


export default App;
