import React from 'react';
import {Navigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import {newPasswordTC} from "./auth-reducer";
import {FormikErrorType} from "./Logging";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {isNewPasswordSelector} from "./authSelectors";

export const NewPassword = () => {
    const dispatch = useAppDispatch()
    const some = useParams<"token">()
    const isNewPassword = useAppSelector(isNewPasswordSelector)


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
        <div>
            <div></div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>Sign in</div>
                    <input type="password"
                           {...formik.getFieldProps('password')}
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                    />
                    <p>Create new password and we will send you further instructions to email</p>
                    <button type={'submit'}>Create new password</button>
                </div>
            </form>
        </div>
    );
};

