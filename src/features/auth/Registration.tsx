import React from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hook";
import {registerTC} from "./auth-reducer";
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string,
    password?: string,
    repeatPassword?: string,
    rememberMe?: boolean
}
export const Registration = () => {
    const isRegisterdIn = useAppSelector(state => state.auth.isRegisterdIn)
    const dispatch = useAppDispatch()

    console.log(isRegisterdIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (values.password.length <= 3) {
                errors.password = 'small'
            }
            return errors
        },
        onSubmit: values => {
            // console.log(formik.values)
            dispatch(registerTC(formik.values))
            formik.resetForm()
        }
    })

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <input
                    placeholder="EMAIL"
                    type="email"
                    {...formik.getFieldProps('email')}
                />
                <input
                    placeholder="Password"
                    type="password"
                    {...formik.getFieldProps('password')}
                />
                <input
                    placeholder="Confirm password"
                    type="password"
                    {...formik.getFieldProps('password')}
                />
                <button
                    type={'submit'}
                >Sign Up
                </button>
            </form>
            <p>Already have an account?</p>
            <button>Sign In</button>
        </div>
    );
};
