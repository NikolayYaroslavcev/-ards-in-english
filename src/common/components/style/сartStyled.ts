import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  font-family: 'Roboto', sans-serif;
  align-items: center;
`
// export const StyledContainer = styled.div`
//   max-width: 1100px;
//   box-sizing: content-box;
//   margin: 0 auto;
//   padding: 0 15px;
// `
//
// export const StyledHeader = styled.div`
//   min-height: 60px;
//   background-color: #666;
//   padding: 20px 0;
// `

export const StyledWrapperForm = styled.div`
  width: 413px;
  margin: 0 auto;
  height: 552px;
  background: #FFFFFF;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  padding: 33px;
`

export const StyleTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 41px;
`


export const StyledWrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: center;

`

export const StyledRememberMe = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 24px;
  margin-bottom: 29px;
  
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
`

export const StyledInputPosition = styled.div`
  position: relative;
  width: 100%;
  
  label {
    position: absolute;
    padding: 0 5px;
    top: -22px;
    left: -5px;
    font-style: normal;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
    opacity: 0.5;
  }
`

export const StyledForgotPassword = styled.p`
  text-align: end;
  margin-bottom: 66px;

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }

`

export const StyledSignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding-top: 31px;
  text-align: center;

  div {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    opacity: 0.5;
  }

  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;

    color: #366EFF;
  }
`




