import {StyledButton} from './StyledButton';
import {FC} from 'react';

type PropsDefault = {
    type: 'button' | 'submit' | 'reset',
    disabled: boolean
    children: string  | undefined;
}


type StyledButton = {
    colorCustom: string
    bgColorHover: string
    bgColorCustom: string
    maxWidth: string,
    margin: string
    padding: string
}


export type PropsButtonType = PropsDefault & StyledButton;

export type PropsButton = Partial<PropsButtonType>

export const Button: FC<PropsButton> = (props) => (
    <StyledButton {...props}/>
);


