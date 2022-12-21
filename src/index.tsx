import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {Header} from "./common/components/header/Header";
import {Main} from "./common/components/main/Main";
import {Footer} from "./common/components/footer/Footer";
import {CastomInput} from "./common/components/CastomInput";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Main/>

            <Footer/>
        </BrowserRouter>
    </Provider>
);


