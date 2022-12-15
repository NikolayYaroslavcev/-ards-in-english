import React from 'react';
import edit from '../../assets/img/Edit.svg'
import {NavLink} from "react-router-dom";

export const Profile = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <NavLink to="/">Back to Packs List</NavLink>
            <h3>Personal Information</h3>
            <div style={{width: '96px', height: '96px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover' ,borderRadius: '100%'}} src="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-3.jpg" alt="photo"/>
            </div>
            <div style={{display: 'flex', columnGap: '10px', alignItems: 'center'}}>
                <p>ИМЯ</p>
                <div>
                    <img style={{}} src={edit} alt="edit"/>
                </div>
            </div>
            <div>
                EMAIL
            </div>
            <button>Log out</button>
        </div>
    );
};

