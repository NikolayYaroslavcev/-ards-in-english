import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../common/hooks/hooks';
import {meTC} from '../features/auth/auth-reducer';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../features/auth/Home';
import {Logging} from '../features/auth/Logging';
import {Registration} from '../features/auth/Registration';
import {Profile} from '../features/profile/Profile';
import {ForgotPassword} from '../features/auth/ForgotPassword';
import {CheckEmail} from '../features/auth/CheckEmail';
import {NewPassword} from '../features/auth/NewPassword';
import {StyledWrapper} from '../common/components/style/сartStyled';


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
            <StyledWrapper>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Logging/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/forgot" element={<ForgotPassword/>}/>
                    <Route path="/check" element={<CheckEmail/>}/>
                    <Route path="/newPassword/:token" element={<NewPassword/>}/>
                    <Route path="/404" element={<div>404. Page not found</div>}/>
                    <Route path={'*'} element={<Navigate to="/404"/>}/>
                </Routes>
            </StyledWrapper>
    );
}


export default App;
