import React from 'react';
import {useParams} from "react-router-dom";
import {useFormik} from "formik";
import {newPasswordTC} from "./auth-reducer";
import {FormikErrorType} from "./Logging";
import {useAppDispatch} from "../../common/hooks/hooks";

export const NewPassword = () => {
    const dispatch = useAppDispatch()
    const some = useParams<"token">()

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
            console.log(formik.values)
            dispatch(newPasswordTC(formik.values))
            formik.resetForm()

        },
    })
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

