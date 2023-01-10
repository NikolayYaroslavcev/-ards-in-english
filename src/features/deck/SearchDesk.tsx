import React, {ChangeEvent, useEffect} from 'react';
import search from '../../assets/img/Search.svg'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {useSearchParams} from "react-router-dom";
import useDebounce from "../../common/hooks/useDebounce";
import {getDeckTC, setUpdateDeskAC} from "./deck-reducer";
import {RangeSlider} from "./RangeSlider";
import {Search, SearchBlock} from "../cards/style-cards";
import {SearchButtonStyle, SearchSliderStyle} from "./StyledDeck";
import {StyledButton} from "../../common/components/style/Button/StyledButton";
import {StyledWrapperImageProfile} from "../../common/components/style/castomImage/StyledWrapperImageProfile";
import resetFilter from '../../assets/img/resetFilter.svg'

export const SearchDesk = () => {
    const dispatch = useAppDispatch()

    const initialize = useAppSelector(state => state.deck.initialize)
    const isMy = useAppSelector(state => state.deck.isMy)
    const userId = useAppSelector(state => state.profile._id)
    const min = useAppSelector(state => state.deck.min)
    const max = useAppSelector(state => state.deck.max)
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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUpdateDeskAC({packName: e.currentTarget.value}))
        searchParams.set('packName', e.currentTarget.value)
    }

    const onclickHandlerMy = () => {
        dispatch(setUpdateDeskAC({isMy: true}))
        searchParams.set('userId', "My")

    }
    const onclickHandlerAll = () => {
        dispatch(setUpdateDeskAC({isMy: false}))
        searchParams.set('userId', '')
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
        <SearchSliderStyle>
            <Search>
                <p>Search</p>
                <SearchBlock>
                    <input value={searchPackName}
                           onChange={onChangeHandler}
                           type="text"
                           placeholder={'Provide your text'}
                    />
                    <img src={search} alt="search"/>
                </SearchBlock>
            </Search>
            <SearchButtonStyle>
                <p>Show packs cards</p>
                <div>
                    <StyledButton bgColorCustom={!isMy ? '#FFF' : ''}
                                  colorCustom={!isMy ? '#000' : ''}
                                  borderRadius={'2px'}
                                  width={'98px'}
                                  onClick={onclickHandlerMy}
                    > My
                    </StyledButton>
                    <StyledButton bgColorCustom={isMy ? '#FFF' : ''}
                                  colorCustom={isMy ? '#000' : ''}
                                  borderRadius={'2px'}
                                  width={'98px'}
                                  onClick={onclickHandlerAll}
                    >All
                    </StyledButton>
                </div>
            </SearchButtonStyle>
            <SearchButtonStyle>
                <p>Number of cards</p>
                <RangeSlider/>
            </SearchButtonStyle>
            <SearchButtonStyle>
                <p>Reset</p>
                <StyledWrapperImageProfile width={'40px'}
                                           height={'36px'}
                                           cursor={'pointer'}
                                           hover={true}
                                           borderRadius={'2px'}
                                           onClick={filterReset}
                >
                    <img src={resetFilter}
                         alt="resetFilter"/>
                </StyledWrapperImageProfile>
            </SearchButtonStyle>
        </SearchSliderStyle>
    );
};

