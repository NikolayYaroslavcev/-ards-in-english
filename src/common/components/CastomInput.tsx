import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {PropsButtonType} from "./style/Button/Button";

type CastomInputPropsType = {
    onChange: (val: string) => void
    valueEmail: string
}
export const CastomInput = (props: CastomInputPropsType) => {
    const [value, setValue] = useState<string>('')
    const [active, setActive] = useState<boolean>(true)
    console.log(props.onChange)
    useEffect(() => {
        if (value.length === 0 ) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [])

    const onBlurHandler = () => {
        if (value.length >= 1 ){
            setActive(false)
        } else {
           setActive(true)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

        props.onChange(e.currentTarget.value)
    }


    const onClickHandler = () => {
        if (value.length === 0 ){
            setActive(false)
        } else {
           // setActive(true)
        }
    }
    return (
        <InputStyle>
            <input
                onClick={onClickHandler}
                onBlur={onBlurHandler}
                type="email"
                value={value}
                onChange={onChangeHandler}
            />
            <Spann active={active}>Email</Spann>
        </InputStyle>
    );
};
type SpanProps = {
    active: boolean,
    children: string  | undefined;
}

export const SpanStyle = styled.span<SpanProps>`
    position: absolute;
    left: 1rem;
    padding: 0 0.5rem;
    color: inherit;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    //background-color: pink;
    top: ${({active}) => active ? '1.1em' : '' || '0em'};
`


export const Spann: FC<SpanProps> = (props) => (
    <SpanStyle {...props}/>
);


export const InputStyle = styled.div`
  position: relative;
  width: 20rem;
  height: 3rem;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.2;
    border-bottom: 2px solid #000000;
    transition: all 0.3s;
    font-family: inherit;
    font-size: 16px;
    color: black;
    outline: none;
    padding: 1.25rem;
    background: none;

    &:hover {
      border-color: #000000;
    }

    &:focus {
      border-color: #000000;
      opacity: 0.8;
    }
  }
`