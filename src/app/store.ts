import {combineReducers, configureStore} from '@reduxjs/toolkit'
<<<<<<< HEAD
import thunk from 'redux-thunk';
import {authReducer} from '../features/auth/auth-reducer';
=======
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../features/auth/auth-reducer";
>>>>>>> origin/registration


const rootReducer = combineReducers({
    auth: authReducer,
<<<<<<< HEAD
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
=======
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;


//
// // объединяя reducer-ы с помощью combineReducers,
// // мы задаём структуру нашего единственного объекта-состояния
// import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, ThunkDispatch} from "@reduxjs/toolkit";
// import thunkMiddleware from 'redux-thunk'
//
// const rootReducer = combineReducers({
//
// })
// // непосредственно создаём store
// export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
// // определить автоматически тип всего объекта состояния
// export type AppRootStateType = ReturnType<typeof rootReducer>
// // создаем тип диспатча который принимает как AC так и TC
// export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
//
// // export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// // export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

>>>>>>> origin/registration
