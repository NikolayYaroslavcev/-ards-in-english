import React, {FC} from 'react';
import {StyledButton} from "../style/Button/StyledButton";
import {CardsHeaderStyle} from "../../../features/cards/style-cards";

type HeaderDeskPropsType = {
    onclickAddDeskHandler: () => void
}
const HeaderDesk: FC<HeaderDeskPropsType> = (
    {
        onclickAddDeskHandler
    }) => {
    return (
        <CardsHeaderStyle>
            <p>Packs list</p>
            <StyledButton onClick={onclickAddDeskHandler}>Add new pack</StyledButton>
        </CardsHeaderStyle>
    );
};

export default HeaderDesk;