import {RootState} from "../../app/store";

export const isLoggedSelector = (state: RootState) => state.auth.isLogged
export const isRegisterSelector = (state: RootState) => state.auth.isRegisterdIn
export const isNewPasswordSelector = (state: RootState) => state.auth.isNewPassword