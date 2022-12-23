import styled from "styled-components";
import {PropsImageType} from "./ImageWrapper";

export const StyledWrapperImageProfile = styled.div<PropsImageType>`
  text-align: center;
  width: ${({width}) => width || '96px'};
  height: ${({height}) => height || '96px'};
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    justify-content: center;
  }
`