import styled from 'styled-components';
import {PropsButton} from './Button';



export const StyledButton = styled.button<PropsButton>`
  display: block;
  max-width: ${({maxWidth}) => maxWidth || '100%'};
  width: 100%;
  background-color: ${({disabled, bgColorCustom}) => disabled ? '#366EFF' : bgColorCustom || '#366EFF'};
  padding: ${({padding}) => padding || '16px'};
  text-transform: uppercase;
  font-size: inherit;
  font-weight: 500;
  margin: ${({margin}) => margin || '0px'};
  color: ${({colorCustom}) => colorCustom || '#fff'};
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 30px;

  &:hover {
    background-color: ${({disabled}) => disabled ? '#104cee' : '#104cee'};
  }
;


`
