import React, {ChangeEvent, useEffect} from 'react';
import {CardsTable} from "./CardsTable";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getCardsTC, setUpdateCardAC} from "./cards-reducer";
import {useParams, useSearchParams} from "react-router-dom";
import useDebounce from "../../common/hooks/useDebounce";
import {PaginationBlock} from "../../common/components/paginationBlock/PaginationBlock";
import {CardsHeader} from "./CardsHeader";
import {SearchCards} from "./SearchCards";

export const CardPage = () => {
    const dispatch = useAppDispatch()

    const initialize = useAppSelector(state => state.cards.initialize)
    const searchCardName = useAppSelector(state => state.cards.cardAnswer)
    const page = useAppSelector(state => state.cards.page)
    const pageCount = useAppSelector(state => state.cards.pageCount)
    const totalCount = useAppSelector(state => state.cards.cardsTotalCount)
    const totalPages = Math.floor(totalCount / pageCount)

    const debounceSearchCards = useDebounce<string>(searchCardName, 500)

    const [searchParams, setSearchParams] = useSearchParams()
    const deskId = useParams().deskId

    useEffect(() => {
        if (initialize) {
            dispatch(getCardsTC())
        }
        setSearchParams(searchParams)
    }, [debounceSearchCards, page, pageCount])


    useEffect(() => {

        if (!initialize) {
            let userId = String(searchParams.get('userId'))
            let pageQuery = Number(searchParams.get('page') || 1)
            let pageCountQuery = Number(searchParams.get('pageCount') || 4)

            dispatch(
                setUpdateCardAC({
                    cardsPack_id: deskId,
                    page: pageQuery,
                    pageCount: pageCountQuery
                })
            )
            dispatch(getCardsTC())
        }
    }, [])


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let cardAnswer = e.currentTarget.value
        dispatch(setUpdateCardAC({cardAnswer}))
        searchParams.set('cardAnswer', cardAnswer)
    }


    const onChangePageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setUpdateCardAC({page}))
        searchParams.set('page', page.toString())
    }

    const handleChangeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setUpdateCardAC({pageCount: e.target.value}))
        searchParams.set('pageCount', e.target.value)
    }

    return (
        <>
            <CardsHeader/>
            <SearchCards searchCardName={searchCardName}/>
            <CardsTable/>
            <PaginationBlock page={page}
                             onChangePageHandler={onChangePageHandler}
                             totalPages={totalPages}
                             pageCount={pageCount}
                             handleChangeSelectValue={handleChangeSelectValue}
            />
        </>

    );
};

