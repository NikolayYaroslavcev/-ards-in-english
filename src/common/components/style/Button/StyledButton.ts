import styled from 'styled-components';
import {PropsButton} from './Button';



export const StyledButton = styled.button<PropsButton>`
  display: block;
  max-width: ${({maxWidth}) => maxWidth || '100%'};
  width: ${({width}) => width || ''};
  background-color: ${({disabled, bgColorCustom}) => disabled ? '#366EFF' : bgColorCustom || '#21268F'};
  padding: ${({padding}) => padding || '8px 28px'};
 // text-transform: uppercase;
  font-weight: 500;
  margin: ${({margin}) => margin || '0px'};
  color: ${({colorCustom}) => colorCustom || '#fff'};
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: ${({borderRadius}) => borderRadius || '30px'};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  transition: all 0.3s;

  &:hover {
    background-color: ${({disabled}) => disabled ? '#104cee' : '#104cee'};
    color: #fff;
  }
;


`
