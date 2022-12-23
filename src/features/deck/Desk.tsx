import React, {useEffect} from 'react';
import {deckTC} from './desk-reducer';
import {logOutTC} from '../auth/auth-reducer';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {DeckType} from "./desk-api";

export const Desk = () => {


    const decks = useAppSelector(state => state.deck.cardPacks)
    console.log(decks)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(deckTC())
    },[])



    return (
        <div> 
            {decks.map((el => {
                return (
                    <div key={el._id}>{el.name}</div>
                )
            }))}
        </div>
    );
};

