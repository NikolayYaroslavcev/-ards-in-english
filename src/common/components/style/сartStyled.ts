import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #EBE0E9;
  box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  min-height: 30px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  
`

export const StyledContainer = styled.div`
  max-width: 1100px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 15px;
`

export const MainWrap = styled.div`
  padding: 60px 0;
  flex: 1 1 auto;
  background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
`


export const StyleInputWpap = styled.div`

  position: relative;
  width: 20rem;
  height: 3rem;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.2;
    border-bottom: 2px solid #000000;
    transition: all 0.3s;
    font-family: inherit;
    font-size: inherit;
    color: black;
    outline: none;
    padding: 1.25rem;
    background: none;

    &:hover {
      border-color: #000000;
    }

    /* Change border when input focus*/

    &:focus {
      border-color: #000000;
      opacity: 0.8;
    }
  }

  label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5rem;
    color: white;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: pink;
  }

  input:focus ~ input:not(:placeholder-shown) input:not(:focus) ~ label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }


`


export const Form = styled.form`
  background-color: #F9F9FE;
  border-radius: 8px;
  width: 413px;
  padding: 20px;
`

export const HeaderBlock = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const HeaderLogo = styled.p`
  font-size: 30px;
  color: red;
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
  cursor: pointer;

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    cursor: pointer;
  }
`
export const imgWrapper = styled.image`


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
  img {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`

export const StyledForgotPassword = styled.p`
  text-align: end;
  margin-bottom: 60px;

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }

`
export const Login = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  //row-gap: 20px;
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
    align-self: center;
    color: #366EFF;

    :hover {
      color: #21268F
    }
  }
`




