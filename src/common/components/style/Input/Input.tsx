import React, {FC} from 'react';
import {StyledInput} from './StyledInput';

type PropsDefault = {
    type: 'email' | 'password' | 'checkbox',
    children: string | undefined;
    onChange: any,
    checked:any,
}


type StyledInput = {
    bgColor: string
    borderColorCustom: string
    isDirty: string
    error: string
}


export type PropsInputType = PropsDefault & StyledInput;

export type PropsInput = Partial<PropsInputType>

export const Input: FC<PropsInput> = (props) => (
    <StyledInput {...props}/>
);

