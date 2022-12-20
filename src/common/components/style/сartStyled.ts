import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #EBE0E9;
  box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  min-height: 60px;
  padding: 20px 0;
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
  background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
  flex: 1 1 auto;

`


export const Login = styled.div`
display: flex;
flex-direction: column;
`
export const LoginTitle = styled.div`
  font-size: 30px;
  color: red;
  
`


export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
export const HeaderLogo = styled.p`
  font-size: 30px;
  color: red;
`
