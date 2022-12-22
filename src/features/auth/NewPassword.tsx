import React, {useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {useFormik} from 'formik';
import {newPasswordTC} from './auth-reducer';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {isNewPasswordSelector} from './authSelectors';
import {FormikErrorType} from './Loggin';
import {
    StyledCreate, StyledErrors,
    StyledInputPosition,
    StyledWrapperForm,
    StyledWrapperLogin
} from '../../common/components/style/сartStyled';
import {Input} from '../../common/components/style/Input/Input';
import eye from '../../assets/img/eye.svg';
import {Button} from '../../common/components/style/Button/Button';

export const NewPassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const some = useParams<'token'>()
    const isNewPassword = useAppSelector(isNewPasswordSelector)

    const onClickHandler = () => {
        setShowPassword(!showPassword)
    }


    const formik = useFormik({
        initialValues: {
            password: '',
            resetPasswordToken: some.token
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (values.password.length < 3) {
                errors.password = 'password is less than three characters long'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(newPasswordTC(formik.values))
            formik.resetForm()
        },
    })


    if (isNewPassword) {
        return <Navigate to={'/login'}/>
    }

    return (
        <StyledWrapperLogin>
            <StyledWrapperForm onSubmit={formik.handleSubmit}>
                    <p>Create new password</p>
                    <StyledInputPosition>
                        <label>Password</label>
                        <Input type={showPassword ? 'email' : 'password'}
                               {...formik.getFieldProps('password')}
                               onChange={formik.handleChange}
                        />
                        {formik.errors.password ? <StyledErrors>{formik.errors.password}</StyledErrors> : null}
                        <img onClick={onClickHandler} src={eye} alt="eye"/>
                    </StyledInputPosition>
                    <StyledCreate>
                        Create new password and we will send you further instructions to email
                    </StyledCreate>
                    <Button type={'submit'} width={'100%'}>Create new password</Button>
            </StyledWrapperForm>
        </StyledWrapperLogin>
    );
};

// <input type="password"
//        {...formik.getFieldProps('password')}
//        onBlur={formik.handleBlur}
//        onChange={formik.handleChange}
// />
