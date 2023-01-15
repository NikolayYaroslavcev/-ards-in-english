import React, {ChangeEvent, useEffect} from 'react';
import {CardsTable} from "./CardsTable";
import {CardsHeaderStyle, Search, SearchBlock} from "./style-cards";
import search from '../../assets/img/search.svg'
import {useAppDispatch} from "../../common/hooks/hooks";
import {StyledWrapperImageProfile} from "../../common/components/style/castomImage/StyledWrapperImageProfile";
import editMenu from '../../assets/img/editMenu.svg'
import {StyledButton} from "../../common/components/style/Button/StyledButton";
import {addCardTC} from "./cards-reducer";
import {useSearchParams} from "react-router-dom";
import useDebounce from "../../common/hooks/useDebounce";

export const CardPage = () => {
    // const [searchValue, setSearchValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const searchAnswer = searchParams.get('cardAnswer') || ''
    // let location = useLocation();
    // console.log(location)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setSearchValue(e.currentTarget.value)
        let cardAnswer = e.currentTarget.value
        setSearchParams({cardAnswer})
        // console.log(searchAnswer)
    }
    useEffect(() => {
      //  console.log(searchAnswer)
    }, [useDebounce(searchParams)])

    const onclickHandler = () => {
        dispatch(addCardTC())
    }

    return (
        <>
            <CardsHeaderStyle>
                <div>
                    <p>My Pack</p>
                    <StyledWrapperImageProfile width={'24px'} height={'24px'} cursor={'pointer'}>
                        <img src={editMenu} alt=""/>
                    </StyledWrapperImageProfile>
                </div>
                <StyledButton onClick={onclickHandler}>Add new card</StyledButton>
            </CardsHeaderStyle>
            <Search>
                <p>Search</p>
                <SearchBlock >
                    <img src={search} alt="search"/>
                    <input value={searchAnswer} onChange={onChangeHandler} placeholder="Provide your text" type="text"/>
                </SearchBlock>
            </Search>
            <CardsTable/>
        </>

    );
};

