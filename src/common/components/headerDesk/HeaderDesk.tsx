import React, {FC} from 'react';
import {StyledButton} from "../style/Button/StyledButton";
import {HeaderStyle} from "../../../features/cards/style-cards";

type HeaderDeskPropsType = {
    onclickAddDeskHandler: () => void
}
const HeaderDesk: FC<HeaderDeskPropsType> = React.memo( ({onclickAddDeskHandler}) => {

    return (
        <HeaderStyle>
            <p>Packs list</p>
            <StyledButton onClick={onclickAddDeskHandler}>Add new pack</StyledButton>
        </HeaderStyle>
    );
})

export default HeaderDesk;