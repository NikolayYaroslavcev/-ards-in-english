import React from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';
import {loginTC} from './auth-reducer';
import {Navigate, NavLink} from 'react-router-dom';
import {Button} from '../../common/components/style/Button/Button';
import {Login, LoginTitle, StyledContainer, StyleInputWpap, StyleLabel} from '../../common/components/style/сartStyled';
import {CastomInput} from "../../common/components/CastomInput";


export type FormikErrorType = {
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
            console.log(formik.values)
            //dispatch(loginTC(formik.values))
            formik.resetForm()
        },
    })
    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }


    return (
        <Login>
            <form onSubmit={formik.handleSubmit}>
                <LoginTitle>Sign in</LoginTitle>
                <CastomInput
                    valueEmail={formik.values.email}
                    onChange={formik.handleChange}
                />
                <input type="password"
                       {...formik.getFieldProps('password')}
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                />


                {/*<StyleInputWpap>*/}

                {/*    <input type="email" */}
                {/*        {...formik.getFieldProps('email')}*/}
                {/*        onBlur={formik.handleBlur}*/}
                {/*        onChange={formik.handleChange}*/}
                {/*    />*/}
                {/*    <label>Email</label>*/}
                {/*</StyleInputWpap>*/}
                {/*<StyleInputWpap>*/}
                {/*    <input type="password" */}
                {/*       {...formik.getFieldProps('password')}*/}
                {/*       onBlur={formik.handleBlur}*/}
                {/*       onChange={formik.handleChange}*/}
                {/*    />*/}
                {/*    <label>password</label>*/}
                {/*</StyleInputWpap>*/}

                <input type="checkbox"
                       {...formik.getFieldProps('rememberMe')}
                       checked={formik.values.rememberMe}
                /> <span>Remember me</span>
                <input className='field' type="text" name="" id="1"/>
                <label htmlFor="1">qwe</label>
                <button type={'submit'}>Sign In</button>
                <Button type={"submit"} margin={"20px 0 0 0"}>Sign In</Button>

                <NavLink to="/forgot">Forgot Password?</NavLink>
                <div>Already have an account?</div>
                <NavLink to="/registration">Sign Up</NavLink>

            </form>
            <div>sdg</div>

        </Login>
    );
};

