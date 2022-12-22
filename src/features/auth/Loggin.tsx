import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';
import {loginTC} from './auth-reducer';
import {Navigate, NavLink} from 'react-router-dom';
import {Button} from '../../common/components/style/Button/Button';
import eye from '../../assets/img/eye.svg'

import {Input} from '../../common/components/style/Input/Input';
import {
    StyledForgotPassword,
    StyledInputPosition,
    StyledRememberMe,
    StyledSignUpBlock,
    StyledWrapperForm,
    StyledWrapperInput,
    StyledWrapperLogin
} from '../../common/components/style/сartStyled';


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Logging = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLogged)
    const onClickHandler = () => {
        setShowPassword(!showPassword)
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
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
        return <Navigate to={'/profile'}/>
    }

    return (
        <StyledWrapperLogin>
            <StyledWrapperForm>
            <form onSubmit={formik.handleSubmit}>
                <p>Sign in</p>
                <StyledWrapperInput>
                    <StyledInputPosition>
                        <label>Email</label>
                        <Input bgColor="#ooo"
                               type={'email'}
                               {...formik.getFieldProps('email')}
                               onChange={formik.handleChange}
                        />
                    </StyledInputPosition>
                    <StyledInputPosition>
                        <label>Password</label>
                        <Input type={showPassword ? 'email' : 'password'}
                               {...formik.getFieldProps('password')}
                               onChange={formik.handleChange}
                        />
                        <img onClick={onClickHandler} src={eye} alt="eye"/>
                    </StyledInputPosition>
                </StyledWrapperInput>
                <StyledRememberMe>
                    <input id={'1'} type="checkbox"
                           {...formik.getFieldProps('rememberMe')}
                           checked={formik.values.rememberMe}/>
                    <label htmlFor="1">Remember me</label>
                </StyledRememberMe>
                <StyledForgotPassword>
                    <NavLink to="/forgot">Forgot Password?</NavLink>
                </StyledForgotPassword>
                <Button type={'submit'} width={'100%'}>Sign In</Button>
                <StyledSignUpBlock>
                    <div>Already have an account?</div>
                    <NavLink to="/registration">Sign Up</NavLink>
                </StyledSignUpBlock>
            </form>
            </StyledWrapperForm>
        </StyledWrapperLogin>
    );
};
