import React from 'react';
import {CardsHeaderBack, HeaderStyle} from "./style-cards";
import {StyledWrapperImageProfile} from "../../common/components/style/castomImage/StyledWrapperImageProfile";
import editMenu from "../../assets/img/editMenu.svg";
import {StyledButton} from "../../common/components/style/Button/StyledButton";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {addCardTC} from "./cards-reducer";
import {NavLink} from "react-router-dom";
import Back from '../../assets/img/Back.svg'

export const CardsHeader = () => {
    const dispatch = useAppDispatch()

    const pakName = useAppSelector(state => state.cards.packName)
    const onclickHandler = () => {
        dispatch(addCardTC())
    }
    return (
        <>
            <CardsHeaderBack>
                <StyledWrapperImageProfile width={'24px'} height={'24px'} cursor={'pointer'}>
                    <img src={Back} alt="Back"/>
                </StyledWrapperImageProfile>
                <NavLink to={'/desks'}>
                    Back to Packs List
                </NavLink>
            </CardsHeaderBack>
            <HeaderStyle>
                <div>
                    <p>{pakName}</p>
                    <StyledWrapperImageProfile width={'24px'} height={'24px'} cursor={'pointer'}>
                        <img src={editMenu} alt="edit"/>
                    </StyledWrapperImageProfile>
                </div>
                <StyledButton onClick={onclickHandler}>Add new card</StyledButton>
            </HeaderStyle>
        </>

    );
};

