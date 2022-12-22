import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import {forgotTC} from './auth-reducer';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {useFormik} from 'formik';
import {isLoggedSelector} from './authSelectors';
import {
    StyledInputPosition,
    StyledSignUpBlock,
    StyledWrapperForm,
    StyledWrapperInput,
    StyledWrapperLogin
} from '../../common/components/style/сartStyled';
import {Input} from '../../common/components/style/Input/Input';
import {Button} from '../../common/components/style/Button/Button';


type FormikErrorType = {
    email?: string
    from?: string;
    message?: string
}

export const ForgotPassword = () => {
    const isLoggedIn = useAppSelector(isLoggedSelector)
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

    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <StyledWrapperLogin>
            <StyledWrapperForm onSubmit={formik.handleSubmit}>
                    <p>Forgot your password?</p>
                    <StyledWrapperInput>
                        <StyledInputPosition>
                            <label>Email</label>
                            <Input bgColor="#ooo"
                                   type={'email'}
                                   {...formik.getFieldProps('email')}
                                   onChange={formik.handleChange}
                            />
                        </StyledInputPosition>
                    </StyledWrapperInput>
                    <StyledSignUpBlock>
                    <div>Enter your email address and we will send you further instructions</div>
                    </StyledSignUpBlock>
                    <Button type={'submit'} width={'100%'} margin={"90px 0 0 0"}>Send Instructions</Button>
                    <StyledSignUpBlock>
                        <div>Did you remember your password?</div>
                        <NavLink to="/login">Try logging in</NavLink>
                    </StyledSignUpBlock>
            </StyledWrapperForm>
        </StyledWrapperLogin>
    );
};





