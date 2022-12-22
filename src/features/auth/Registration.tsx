import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';
import {registerTC} from './auth-reducer';
import {Navigate, NavLink} from 'react-router-dom';
import {isLoggedSelector, isRegisterSelector} from './authSelectors';
import {
    StyledInputPosition,
    StyledSignUpBlock,
    StyledWrapperButton,
    StyledWrapperForm,
    StyledWrapperInput,
    StyledWrapperLogin
} from '../../common/components/style/сartStyled';
import {Input} from '../../common/components/style/Input/Input';
import eye from '../../assets/img/eye.svg';
import {Button} from '../../common/components/style/Button/Button';

type FormikErrorType = {
    email?: string,
    password?: string,
    repeatPassword?: string,
    rememberMe?: boolean
}
export const Registration = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isRegisterdIn = useAppSelector(isRegisterSelector)
    const isLoggedIn = useAppSelector(isLoggedSelector)
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        setShowPassword(!showPassword)
    }

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
            if (values.password !== values.repeatPassword) {
                errors.repeatPassword = 'разные пароли'
            }
            return errors
        },
        onSubmit: values => {
            //console.log(formik.values)
            dispatch(registerTC(formik.values))
        }
    })

    if (isRegisterdIn || isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <StyledWrapperLogin>
            <StyledWrapperForm>
                <form onSubmit={formik.handleSubmit}>
                    <p>Sign Up</p>
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
                        <StyledInputPosition>
                            <label>Password</label>
                            <Input type={showPassword ? 'email' : 'password'}
                                   {...formik.getFieldProps('repeatPassword')}
                                   onChange={formik.handleChange}
                            />
                            <img onClick={onClickHandler} src={eye} alt="eye"/>
                        </StyledInputPosition>
                    </StyledWrapperInput>
                    <StyledWrapperButton>
                        <Button type={'button'}>Cancel</Button>
                        <Button type={'submit'}>Register</Button>
                    </StyledWrapperButton>
                </form>
                <StyledSignUpBlock>
                    <div>Already have an account?</div>
                    <NavLink to="/login">Sign In</NavLink>
                </StyledSignUpBlock>
            </StyledWrapperForm>
        </StyledWrapperLogin>
    );
};


{/*<input*/
}
{/*    placeholder="Confirm password"*/
}
{/*    type="password"*/
}
{/*    {...formik.getFieldProps('repeatPassword')}*/
}
{/*/>*/
}

// {formik.touched.email && formik.errors.email &&
// <div style={{color: 'red'}}>{formik.errors.email}</div>}


// {formik.touched.repeatPassword && formik.errors.repeatPassword &&
// <div style={{color: 'red'}}>{formik.errors.repeatPassword}</div>}
