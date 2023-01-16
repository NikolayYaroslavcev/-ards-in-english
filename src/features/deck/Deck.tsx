import React, {ChangeEvent, memo, useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {deskAddTC, getDeckTC, setUpdateDeskAC} from "./deck-reducer";
import {SearchDesk} from "./SearchDesk";
import {useSearchParams} from "react-router-dom";
import useDebounce from "../../common/hooks/useDebounce";
import {DeskTable} from "./Table";
import {PaginationBlock} from "../../common/components/paginationBlock/PaginationBlock";
import HeaderDesk from "../../common/components/headerDesk/HeaderDesk";

export const Desk = memo(() => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const myId = useAppSelector(state => state.profile._id)
    const initialize = useAppSelector(state => state.deck.initialize)
    const isMy = useAppSelector(state => state.deck.isMy)
    const min = useAppSelector(state => state.deck.min)
    const max = useAppSelector(state => state.deck.max)
    const page = useAppSelector(state => state.deck.page)
    const pageCount = useAppSelector(state => state.deck.pageCount)
    const searchPackName = useAppSelector(state => state.deck.packName)
    const totalCount = useAppSelector(state => state.deck.cardPacksTotalCount)
    const totalPages = Math.floor(totalCount / pageCount)

    const debounceSearchDesk = useDebounce<string>(searchPackName, 500)

    useEffect(() => {
        if (initialize) {
            dispatch(getDeckTC())
        }
        setSearchParams(searchParams)
    }, [debounceSearchDesk, page, pageCount, min, max, isMy,])


    useEffect(() => {
        if (!initialize) {
            let isMyQuery = Boolean(searchParams.get('userId') === 'My')
            let pageCountQuery = Number(searchParams.get('pageCount') || 4)
            let pageQuery = Number(searchParams.get('page') || 1)
            let questionQuery = searchParams.get('packName') || ''
            let sortPackQuery = (searchParams.get('sortPack') as '0updated' | '1updated') || '0updated'
            let userIdPackQuery = (searchParams.get('user_id'))

            dispatch(
                setUpdateDeskAC({
                    isMy: isMyQuery,
                    page: pageQuery,
                    pageCount: pageCountQuery,
                    packName: questionQuery,
                    sortPacks: sortPackQuery,
                })
            )
            dispatch(getDeckTC())
        }
    }, [])

    const onChangeInputValueHandler = useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUpdateDeskAC({packName: e.currentTarget.value}))
        searchParams.set('packName', e.currentTarget.value)
    }, [dispatch])

    const onclickHandlerMy = useCallback (() => {
        dispatch(setUpdateDeskAC({isMy: true}))
        searchParams.set('userId', "My")
    }, [dispatch])

    const onclickHandlerAll = useCallback(() => {
        dispatch(setUpdateDeskAC({isMy: false}))
        searchParams.set('userId', '')
    }, [dispatch])

    const filterReset = useCallback (() => {
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
    }, [])

    const onclickAddDeskHandler = useCallback(() => {
        dispatch(deskAddTC())
    }, [dispatch])

    const handleChangeSelectValue = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setUpdateDeskAC({pageCount: e.target.value}))
        searchParams.set('pageCount', e.target.value)
    }, [dispatch])

    const onChangePageHandler = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setUpdateDeskAC({page}))
        searchParams.set('page', page.toString())
        setSearchParams(searchParams)
    }, [dispatch])

    return (
        <>
            <HeaderDesk onclickAddDeskHandler={onclickAddDeskHandler}/>
            <SearchDesk searchPackName={searchPackName}
                        isMy={isMy}
                        filterReset={filterReset}
                        onclickHandlerAll={onclickHandlerAll}
                        onChangeInputValueHandler={onChangeInputValueHandler}
                        onclickHandlerMy={onclickHandlerMy}
            />
            <DeskTable myId={myId}/>
            <PaginationBlock page={page}
                             onChangePageHandler={onChangePageHandler}
                             totalPages={totalPages}
                             pageCount={pageCount}
                             handleChangeSelectValue={handleChangeSelectValue}
            />
        </>
    )
})
