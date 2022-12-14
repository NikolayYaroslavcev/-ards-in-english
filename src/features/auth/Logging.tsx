import React from 'react';

export const Logging = () => {
    return (
        <div>
            <div>Sign in</div>
            <input type="email"/>
            <input type="password"/>
            <input type="checkbox"/> <span>Remember me</span>
            <a href="src/common/components#">Forgot Password?</a>
            <button>Sign In</button>
            <div>Already have an account?</div>
            <a href="src/common/components#">Sign Up</a>
        </div>
    );
};

