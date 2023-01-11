import {FC} from "react";
import { StyledActions } from "./StyledActions";

type ActionsStyled = {
  isMyDesk: boolean
}

export type PropsActionsType = ActionsStyled;
export type PropsActions = Partial<PropsActionsType>
export const Action: FC<PropsActions> = (props) => (
    <StyledActions {...props}/>
)

