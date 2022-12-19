import React from 'react';
import {Container, HeaderBlock, HeaderLgo, HeaderWrap} from "../style/style";
import {StyledButton} from "../style/Button/StyledButton";

export const Header = () => {
    return (
        <HeaderWrap>
            <Container>
                <HeaderBlock>
                    <HeaderLgo>LOGO</HeaderLgo>
                    <StyledButton>Sign in</StyledButton>
                </HeaderBlock>
            </Container>
        </HeaderWrap>
    );
};

