import React from 'react';
import './App.css';
import {Registration} from './features/auth/Registration';
import {Logging} from './features/auth/Logging';

function App() {
    return (
        <div className="App">
            <Logging/>
            <Registration/>
        </div>
    );
}


export default App;
