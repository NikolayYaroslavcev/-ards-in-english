import React from 'react';
import { StyledContainer , StyledHeader, HeaderBlock, HeaderLogo } from '../style/сartStyled';
import {StyledButton} from "../style/Button/StyledButton";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <HeaderBlock>
                    <HeaderLogo>LOGO</HeaderLogo>
                    <StyledButton>Sign in</StyledButton>
                </HeaderBlock>
            </StyledContainer>
        </StyledHeader>
    );
};

