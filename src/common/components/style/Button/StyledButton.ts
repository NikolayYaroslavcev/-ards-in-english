import styled from 'styled-components';
import {PropsButton} from './Button';



export const StyledButton = styled.button<PropsButton>`
  display: block;
  max-width: ${({maxWidth}) => maxWidth || '280px'};
  width: 100%;
  background-color: ${({disabled, bgColorCustom}) => disabled ? 'rgba(35,63,210,0.35)' :bgColorCustom || '#c91f38'};
  border-radius: 16px;
  padding: ${({padding}) => padding || '16px'};
  text-transform: uppercase;
  font-size: inherit;
  font-weight: 500;
  margin: ${({margin}) => margin || '0px'};
  color: ${({colorCustom}) => colorCustom || '#fff'};
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background-color: ${({disabled}) => disabled ? '#4bcfa059' : '#50daa8'};
  }
;


`
