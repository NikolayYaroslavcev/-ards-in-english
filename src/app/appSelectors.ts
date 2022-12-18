import {RootState} from "./store";

export const isInitializedSelector = (state: RootState) => state.app.isInitialized
