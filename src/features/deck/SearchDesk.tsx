import React, {ChangeEvent, ReactNode, useCallback, useEffect, useState} from 'react';
import search from '../../assets/img/Search.svg'
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {useParams, useSearchParams} from "react-router-dom";
import useDebounce from "../../common/hooks/useDebounce";
import {addCardTC} from "../cards/cards-reducer";
import {deskSearchTC} from "./deck-reducer";


export const SearchDesk = () => {


    const userId = useAppSelector(state => state.profile._id)
    const dispatch = useAppDispatch()

    const [searchParams, setSearchParams] = useSearchParams()

    const packName = searchParams.get('packName') || ''


    // const [idParams, setIdParams] = useSearchParams()
    // const id = searchParams.get('user_id') || 'packName'

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let packName = e.currentTarget.value
        setSearchParams({packName})
    }

    useEffect(() => {
        dispatch(deskSearchTC({packName: packName}))
    }, [useDebounce(searchParams), dispatch])

    const onclickHandlerMy = () => {

         setSearchParams({userId})
    }
    const onclickHandlerAll = () => {

        dispatch(deskSearchTC({user_id: ''}))
    }

    return (
        <>
            <input value={packName}
                   onChange={onChangeHandler}
                   type="text"
                   placeholder={'Provide your text'}
            />
            <a href="#"><img src={search} alt=""/></a>

            <button onClick={onclickHandlerMy}>My</button>
            <button onClick={onclickHandlerAll}>All</button>

        </>
    );
};

