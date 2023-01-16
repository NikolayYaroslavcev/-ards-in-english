import React, {ChangeEvent, FC} from 'react';
import {Search, SearchBlock} from "./style-cards";
import search from "../../assets/img/search.svg";
import {setUpdateCardAC} from "./cards-reducer";
import {useAppDispatch} from "../../common/hooks/hooks";
import {useSearchParams} from "react-router-dom";

type SearchCardsPropsType = {
    searchCardName: string
}
export const SearchCards:FC<SearchCardsPropsType> = ({searchCardName}) => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let cardAnswer = e.currentTarget.value
        dispatch(setUpdateCardAC({cardAnswer}))
        searchParams.set('cardAnswer', cardAnswer)
        setSearchParams(searchParams)
    }
    return (
        <Search>
            <p>Search</p>
            <SearchBlock>
                <img src={search} alt="search"/>
                <input value={searchCardName} onChange={onChangeHandler} placeholder="Provide your text"
                       type="text"/>
            </SearchBlock>
        </Search>
    );
};

