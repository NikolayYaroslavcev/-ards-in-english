import styled from "styled-components";
import {PropsActions} from "./Actions";

export const StyledActions = styled.div<PropsActions>`
  display: flex;
  column-gap: 10px;
  
  img:not(:first-child) {
    opacity: ${({isMyDesk}) => isMyDesk ? '1' : '0.5'};
    cursor: ${({isMyDesk}) => isMyDesk ? 'pointer' : 'no-drop'};
  }

`