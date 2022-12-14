import React from 'react';
import './App.css';
import {Registration} from './features/auth/Registration';
import {Logging} from './features/auth/Logging';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div>dffdgfdgdfgdfgdfgewrewreewrwre</div>}/>
                {/*<Navigation/>*/}
                <Route path="/login" element={<Logging/>}/>
                <Route path="/registration" element={<Registration/>}/>
            </Routes>
        </div>
    );
}


export default App;
