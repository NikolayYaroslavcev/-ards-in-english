import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import {forgotTC} from './auth-reducer';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';


type FormikErrorType = {
    email?: string
    from?: string;
    message?: string
}

export const ForgotPassword = () => {
    const isForgot = useAppSelector(state => state.auth.isForgot)
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            from: 'test-front-admin <sweeterthanfurby@mail.ru>',
            message: `<div style="background-color: lime; padding: 15px">
                       password recovery link: 
                       <a href='http://localhost:3000/newPassword/$token$'>
                       link</a>
                        </div>`,
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(forgotTC(formik.values))
            formik.resetForm()
        }
    })

    // if (!isForgot) {
    //     return <Navigate to={'/check'}/>
    // }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <div>Forgot your password?</div>
                <input
                    type="email"
                    placeholder={'Email'}
                    {...formik.getFieldProps('email')}/>
                <div>Enter your email address and we will send you further instructions</div>
                <button type={'submit'}>Send Instructions</button>
                <div>Did you remember your password?</div>
                <NavLink to="/login">Try logging in</NavLink>
            </div>
        </form>
    );
};





