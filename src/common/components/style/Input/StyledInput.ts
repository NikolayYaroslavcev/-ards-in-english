import styled, {css} from 'styled-components';
import {PropsInput} from "./Input"


export const StyledInput = styled.input<PropsInput>`
  ${({bgColor}) => bgColor && css`
    background: ${bgColor};
  `}
  color: #000;
  outline: none;
  //border: none;
  border-bottom: 1px solid ${({error, isDirty}) => (error && isDirty) ? `red` : "rgba(0,0,0,.2)"};
  font-size: inherit;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 10px;


  &:focus {
    border-color: ${({
                       error,
                       isDirty,
                       borderColorCustom
                     }) => (error && isDirty) ? `red` : borderColorCustom || `#4bcfa0`};
  }
`

