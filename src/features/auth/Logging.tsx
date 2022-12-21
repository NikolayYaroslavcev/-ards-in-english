import React from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';
import {loginTC} from './auth-reducer';
import {Navigate, NavLink} from 'react-router-dom';
import {Button} from '../../common/components/style/Button/Button';
import {
    StyledForgotPassword,
    StyledInputPosition,
    StyledRememberMe,
    StyledSignUpBlock,
    StyledWrapperForm,
    StyledWrapperInput,
    StyleTitle
} from '../../common/components/style/сartStyled';
import {Input} from '../../common/components/style/Input/Input';


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
            dispatch(loginTC(formik.values))
            formik.resetForm()
        },
    })
    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }


    return (
        <form onSubmit={formik.handleSubmit}>
            <StyledWrapperForm>
                <StyleTitle>Sign in</StyleTitle>
                <StyledWrapperInput>
                    <StyledInputPosition>
                      <label>Email</label>
                        <Input type={'email'}
                               {...formik.getFieldProps('email')}
                               onChange={formik.handleChange}
                        />
                    </StyledInputPosition>
                    <StyledInputPosition>
                       <label>Password</label>
                        <Input type={'password'}
                               {...formik.getFieldProps('password')}
                               onChange={formik.handleChange}

                        />
                    </StyledInputPosition>
                </StyledWrapperInput>
                <StyledRememberMe>
                    <input type="checkbox"
                           {...formik.getFieldProps('rememberMe')}
                           checked={formik.values.rememberMe}/> <span>Remember me</span>
                </StyledRememberMe>
                <StyledForgotPassword>
                    <NavLink to="/forgot">Forgot Password?</NavLink>
                </StyledForgotPassword>
                <Button type={'submit'}>Sign In</Button>
                <StyledSignUpBlock>
                    <div>Already have an account?</div>
                    <NavLink to="/registration">Sign Up</NavLink>
                </StyledSignUpBlock>
            </StyledWrapperForm>
        </form>
    );
};

{/*<input type="password"*/
}
{/*       {...formik.getFieldProps('password')}*/
}
{/*       onBlur={formik.handleBlur}*/
}
{/*       onChange={formik.handleChange}*/
}
{/*       placeholder="Enter your password"*/
}
{/*/>*/
}

{/*<input type="email"*/
}
{/*       {...formik.getFieldProps('email')}*/
}
{/*       onBlur={formik.handleBlur}*/
}
{/*       onChange={formik.handleChange}*/
}
{/*       placeholder="Enter your email"*/
}
{/*/> <br/><br/>*/
}

{/*<input type="checkbox"*/
}
{/*       {...formik.getFieldProps('rememberMe')}*/
}
{/*       checked={formik.values.rememberMe}*/
}
{/*/> <span>Remember me</span>*/
}
