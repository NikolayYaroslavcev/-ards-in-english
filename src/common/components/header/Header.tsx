import React from 'react';
import {HeaderBlock, HeaderLogo, StyledContainer, StyledHeader, StyledHeaderAuth,} from '../style/сartStyled';
import {StyledButton} from "../style/Button/StyledButton";
import {useAppSelector} from "../../hooks/hooks";
import avatar from '../../../assets/img/minon.jpg'
import {StyledWrapperImageProfile} from "../style/inage/StyledWrapperImageProfile";

export const Header = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLogged)
    const userData = useAppSelector(state => state.profile)

    const authBlock =
        <StyledHeaderAuth>
            <p>{userData.name}</p>
            <StyledWrapperImageProfile width={'36px'} height={'36px'}>
                <img src={avatar}
                     alt="avatar"/>
            </StyledWrapperImageProfile>
        </StyledHeaderAuth>

    return (
        <StyledHeader>
            <StyledContainer>
                <HeaderBlock>
                    <HeaderLogo>LOGO</HeaderLogo>
                    {isLoggedIn ? authBlock : <StyledButton>Sign in</StyledButton>}
                </HeaderBlock>
            </StyledContainer>
        </StyledHeader>
    );
};

