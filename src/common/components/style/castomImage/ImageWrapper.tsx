import {FC} from "react";
import {StyledWrapperImageProfile} from "./StyledWrapperImageProfile";

export type PropsImageDefault = {
    width: string,
    height: string
}

export type PropsImg = PropsImageDefault;
export type PropsImageType = Partial<PropsImg>

export const ImageWrapper: FC<PropsImageType> = (props) => (
    <StyledWrapperImageProfile {...props}/>
);