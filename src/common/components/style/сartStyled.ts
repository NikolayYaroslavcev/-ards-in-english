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
  display: flex;
  flex: 1 1 auto;

`


export const Login = styled.div`
display: flex;
flex-direction: column;
 width: 420px;
 align-items: center;
// justify-content: center;
background: #FFFFFF;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
border-radius: 2px;
`

// export const StyleInputWpap = styled.div`
// position: relative;

// input {
//   height: calc(3.5rem + 2px);
//   line-height: 1.25;
//   padding: 1rem 0.75rem;
//   background-color: #fff;
//   padding-top: 1.625rem;
//     padding-bottom: .625rem;

//   &:placeholder {
//     color: #fff;
//   };

//   &:focus:not(:placeholder-shown) {
      
//     }
// }

// label {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   padding: 1rem .75rem;
//   pointer-events: none;
//   border: 1px solid transparent;
//   transform-origin: 0 0;
//   transition: opacity .15s ease-in-out, transform .15s ease-in-out;
//    opacity: .65;
//   transform: scale(.85) translateY(-.75rem) translateX(.15rem);
// }



// `
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
//   input:focus ~ label {
//   top: -0.5rem;
//   font-size: 0.8rem;
//   left: 0.8rem;
// }
// input:not(:focus) ~ label {
//   top: -0.5rem;
//   font-size: 0.8rem;
//   left: 0.8rem;
// }
  


`
export const StyleLabel = styled.label`
  
  
 
`



export const LoginTitle = styled.div`
  font-size: 26px;
  color: #000000;                    

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
