import React from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';
import {loginTC} from './auth-reducer';
import {Navigate, NavLink} from 'react-router-dom';


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Logging = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLogged)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },

        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            } else if (values.password.length < 3) {
                errors.password = 'password is less than three characters long'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(formik.values))
            formik.resetForm()
        },
    })

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <div>Sign in</div>
                <input type="email"
                       {...formik.getFieldProps('email')}/>
                <input type="password"
                       {...formik.getFieldProps('password')}
                />
                <input type="checkbox"
                       {...formik.getFieldProps('rememberMe')}
                       checked={formik.values.rememberMe}
                /> <span>Remember me</span>
                <br/>
                <NavLink to="/forgot">Forgot Password?</NavLink>
                <button>Sign In</button>
                <div>Already have an account?</div>
                <NavLink to="/registration">Sign Up</NavLink>
            </div>
        </form>
    );
};

