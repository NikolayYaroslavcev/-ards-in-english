import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';
import {registerTC} from './auth-reducer';
import {Navigate, NavLink} from 'react-router-dom';
import {isLoggedSelector, isRegisterSelector} from './authSelectors';
import {
    StyledErrors,
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
    const [showPass, setShowPass] = useState<boolean>(false)
    const isRegisterdIn = useAppSelector(isRegisterSelector)
    const isLoggedIn = useAppSelector(isLoggedSelector)
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        setShowPassword(!showPassword)
    }
    const onClickPassHandler = () => {
        setShowPass(!showPass)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            repeatPassword: '',
            password: '',

        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (values.repeatPassword !== values.password) {
                errors.password = 'different passwords'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(registerTC(formik.values))
        }
    })

    if (isRegisterdIn || isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <StyledWrapperLogin>
            <StyledWrapperForm onSubmit={formik.handleSubmit}>
                <p>Sign Up</p>
                <StyledWrapperInput>
                    <StyledInputPosition>
                        <label>Email</label>
                        <Input bgColor="#ooo"
                               type={'email'}
                               {...formik.getFieldProps('email')}
                               onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email &&
                            <StyledErrors>{formik.errors.email}</StyledErrors>}
                    </StyledInputPosition>
                    <StyledInputPosition>
                        <label>Password</label>
                        <Input type={showPass ? 'text' : 'password'}
                               {...formik.getFieldProps('password')}
                               onChange={formik.handleChange}
                        />
                        <img onClick={onClickPassHandler} src={eye} alt="eye"/>
                    </StyledInputPosition>
                    <StyledInputPosition>
                        <label>Password</label>
                        <Input type={showPassword ? 'text' : 'password'}
                               {...formik.getFieldProps('repeatPassword')}
                               onChange={formik.handleChange}
                        />
                        <img onClick={onClickHandler} src={eye} alt="eye"/>
                    </StyledInputPosition>
                    {formik.touched.repeatPassword && formik.errors.password &&
                        <StyledErrors>{formik.errors.password}</StyledErrors>}
                </StyledWrapperInput>
                <StyledWrapperButton>
                    <Button width={'100%'} type={'submit'}>Register</Button>
                </StyledWrapperButton>
                <StyledSignUpBlock>
                    <div>Already have an account?</div>
                    <NavLink to="/login">Sign In</NavLink>
                </StyledSignUpBlock>
            </StyledWrapperForm>
        </StyledWrapperLogin>
    );
};
