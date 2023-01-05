import React, {ChangeEvent, useEffect} from 'react';
import search from '../../assets/img/Search.svg'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {useSearchParams} from "react-router-dom";
import useDebounce from "../../common/hooks/useDebounce";
import {getDeckTC, setUpdateDeskAC} from "./deck-reducer";

export const SearchDesk = () => {
    const dispatch = useAppDispatch()

    const initialize = useAppSelector(state => state.deck.initialize)
    const isMy = useAppSelector(state => state.deck.isMy)
    const userId = useAppSelector(state => state.profile._id)
    const min = useAppSelector(state => state.deck.min)
    const minCardsCount = useAppSelector(state => state.deck.minCardsCount)
    const max = useAppSelector(state => state.deck.max)
    const maxCardsCount = useAppSelector(state => state.deck.maxCardsCount)
    const page = useAppSelector(state => state.deck.page)
    const pageCount = useAppSelector(state => state.deck.pageCount)
    const searchPackName = useAppSelector(state => state.deck.packName)
    const maxPage = useAppSelector(state => state.deck.cardPacksTotalCount)

    const debounceSearchDesk = useDebounce<string>(searchPackName, 500)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (initialize) {
            dispatch(getDeckTC())
        }
        setSearchParams(searchParams)
    }, [debounceSearchDesk, page, pageCount, min, isMy, max])


    useEffect(() => {
        if (!initialize) {
            // let isMyQuery = Boolean(searchParams.get('my') === 'true')
            let minQuery = Number(searchParams.get('min') || -1)
            let maxQuery = Number(searchParams.get('max') || -1)
            let pageCountQuery = Number(searchParams.get('pageCount') || 4)
            let pageQuery = Number(searchParams.get('page') || 1)
            let questionQuery = searchParams.get('packName') || ''
            let sortPackQuery = (searchParams.get('sortPack') as '0updated' | '1updated') || '0updated'
            let userIdPackQuery = (searchParams.get('user_id'))


            dispatch(
                setUpdateDeskAC({
                    // isMy: isMyQuery,
                    min: minQuery !== -1 ? minQuery : null,
                    max: maxQuery !== -1 ? maxQuery : null,
                    page: pageQuery,
                    pageCount: pageCountQuery,
                    packName: questionQuery,
                    sortPacks: sortPackQuery,
                })
            )
            dispatch(getDeckTC())
        }
    }, [])


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUpdateDeskAC({packName: e.currentTarget.value}))
        searchParams.set('packName', e.currentTarget.value)
        // dispatch(deskSearchTC({packName: packName}))
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUpdateDeskAC({min: e.currentTarget.value}))
        searchParams.set('min', e.currentTarget.value)
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUpdateDeskAC({max: e.currentTarget.value}))
        searchParams.set('max', e.currentTarget.value)
    }

    // useEffect(() => {
    //    // dispatch(deskSearchTC({packName: packName}))
    // }, [useDebounce(searchParams), dispatch])

    const onclickHandlerMy = () => {
        dispatch(setUpdateDeskAC({isMy: true}))
        searchParams.set('userId', "My")

    }
    const onclickHandlerAll = () => {
        // dispatch(deskSearchTC({user_id: ''}))
    }

    const filterReset = () => {
        // searchParams.delete('isMy')
        searchParams.delete('min')
        searchParams.delete('max')
        searchParams.delete('page')
        searchParams.delete('pageCount')
        searchParams.delete('userId')
        searchParams.delete('packName')
        setSearchParams(searchParams)
        dispatch(
            setUpdateDeskAC({
                min: null,
                max: null,
                isMy: false,
                page: 1,
                pageCount: 4,
                sortPacks: '0updated',
                packName: ''
            })
        )
    }

    return (
        <>
            <input value={searchPackName}
                   onChange={onChangeHandler}
                   type="text"
                   placeholder={'Provide your text'}
            />
            <a href="#"><img src={search} alt=""/></a>

            <button onClick={onclickHandlerMy}>My</button>
            <button onClick={onclickHandlerAll}>All</button>
            <input value={minCardsCount} onChange={onChangeMinHandler} type="number" placeholder='min'/>
            <input value={maxCardsCount} onChange={onChangeMaxHandler} type="number" placeholder='max'/>
            <button onClick={filterReset}>reset</button>
            {/*<InputRange*/}
            {/*    maxValue={20}*/}
            {/*    minValue={0}*/}
            {/*    value={val}*/}
            {/*    onChange={value => setVal(15) } />*/}
        </>
    );
};

