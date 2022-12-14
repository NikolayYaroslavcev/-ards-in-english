import React from 'react';

export const Registration = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form action="src/app/conponents">
                <input placeholder="EMAIL" type="email"/>
                <input placeholder="Password" type="password"/>
                <input placeholder="Confirm password" type="password"/>
                <button>Sign Up </button>
            </form>
        </div>
    );
};
