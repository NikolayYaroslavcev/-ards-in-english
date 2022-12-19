import styled from 'styled-components';
import {PropsButton} from './Button';



export const  StyledButton = styled.button<PropsButton>`
  display: block;
  max-width: ${({maxWidth}) => maxWidth || '120px'};
  //width: 100%;
  background-color: ${({disabled, bgColorCustom}) => disabled ? 'rgba(35,63,210,0.35)' : bgColorCustom || '#366EFF'};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  border-radius: 30px;
  padding: ${({padding}) => padding || '8px 28px'};
  color: ${({colorCustom}) => colorCustom || '#fff'};
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s;

  margin: ${({margin}) => margin || '0px'};

  &:hover {
    background-color: ${({disabled}) => disabled ? 'rgba(29,57,79,0.35)' : '#21268F'};
  }
;


`
