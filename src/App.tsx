import React, {useEffect} from 'react';
import './App.css';
import {Registration} from './features/auth/Registration';
import {Logging} from './features/auth/Logging';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './features/profile/Profile';
import {Home} from './features/auth/Home';
import {MeTC} from './features/auth/auth-reducer';
import {useAppDispatch, useAppSelector} from './common/hooks/hooks';


function App() {

    const dispatch = useAppDispatch()

    const isInitialized = useAppSelector<boolean>((state) => state.app.isInitialized)
    // const isLogged = useAppSelector<boolean>((state) => state.auth.isLogged)

    useEffect(() => {
        dispatch(MeTC())
    }, [])


    if (!isInitialized) {
        return <div style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <div> крутится круг</div>
        </div>
    }


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Navigation/>*/}
                <Route path="/login" element={<Logging/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}


export default App;
