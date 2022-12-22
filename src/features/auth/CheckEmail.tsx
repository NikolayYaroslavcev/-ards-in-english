import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import check from '../../assets/img/Check.svg'
import {useAppSelector} from '../../common/hooks/hooks';
import {isLoggedSelector} from './authSelectors';
import {
    StyledSignUpBlock,
    StyledWrapperForm,
    StyledWrapperImage,
    StyledWrapperLogin
} from '../../common/components/style/сartStyled';

export const CheckEmail = () => {
    const isLoggedIn = useAppSelector(isLoggedSelector)
    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <StyledWrapperLogin>
            <StyledWrapperForm>
                <p>Check Email</p>
                <StyledWrapperImage>
                    <img src={check} alt="check"/>
                </StyledWrapperImage>
                <StyledSignUpBlock>
                    <div>We’ve sent an Email with instructions to example@mail.com</div>
                    <NavLink to="/login">Back to login</NavLink>
                </StyledSignUpBlock>
            </StyledWrapperForm>
        </StyledWrapperLogin>
    );
};

