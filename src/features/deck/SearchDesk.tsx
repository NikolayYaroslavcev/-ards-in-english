import React, {ChangeEvent, FC} from 'react';
import search from '../../assets/img/Search.svg'
import {RangeSlider} from "./RangeSlider";
import {Search, SearchBlock} from "../cards/style-cards";
import {SearchButtonStyle, SearchSliderStyle} from "./StyledDeck";
import {StyledButton} from "../../common/components/style/Button/StyledButton";
import {StyledWrapperImageProfile} from "../../common/components/style/castomImage/StyledWrapperImageProfile";
import resetFilter from '../../assets/img/resetFilter.svg'

type SearchDeskPropsType = {
    searchPackName: string
    onChangeInputValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    isMy: boolean
    onclickHandlerMy: () => void
    onclickHandlerAll: () => void
    filterReset: () => void
}
export const SearchDesk: FC<SearchDeskPropsType> = (
    {
        searchPackName,
        onChangeInputValueHandler,
        isMy,
        onclickHandlerMy,
        onclickHandlerAll,
        filterReset
    }) => {

    return (
        <SearchSliderStyle>
            <Search>
                <p>Search</p>
                <SearchBlock>
                    <input value={searchPackName}
                           onChange={onChangeInputValueHandler}
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

