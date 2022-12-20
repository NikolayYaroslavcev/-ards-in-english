import React from 'react';
import App from "../../../app/App";
import { MainWrap, StyledContainer } from '../style/сartStyled';

export const Main = () => {
    return (
        <MainWrap>
            <StyledContainer>
                <App/>
            </StyledContainer>
        </MainWrap>
    );
};

