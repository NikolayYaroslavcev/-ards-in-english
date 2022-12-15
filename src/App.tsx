import React, {useEffect} from 'react';
import './App.css';
import {Registration} from './features/auth/Registration';
import {Logging} from './features/auth/Logging';
import {Route, Routes} from 'react-router-dom';
import {Profile} from "./features/profile/Profile";
import {Home} from './features/auth/Home';



function App() {



    useEffect(() => {

    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Navigation/>*/}
                <Route path="/login" element={<Logging/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={ <Profile/>}/>
            </Routes>
        </div>
    );
}


export default App;
