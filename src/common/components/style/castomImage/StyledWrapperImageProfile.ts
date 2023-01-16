import styled from "styled-components";
import {PropsImageType} from "./ImageWrapper";

export const StyledWrapperImageProfile = styled.div<PropsImageType>`
  text-align: center;
  width: ${({width}) => width || '96px'};
  height: ${({height}) => height || '96px'};
  //border-radius: ${({borderRadius}) => borderRadius || '100%'};
  transition: all 0.3s;
  
  :hover {
    scale: ${({hover}) => hover ? '1.1' : '1'};
  }

  img {
    transition: all 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({borderRadius}) => borderRadius || '100%'};
    justify-content: center;
    cursor: ${({cursor}) => cursor || 'auto'};

  }
`