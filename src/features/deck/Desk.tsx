import React, {useEffect} from 'react';
import {deckTC} from './desk-reducer';
import {logOutTC} from '../auth/auth-reducer';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';

export const Desk = () => {


    const decks = useAppSelector(state => state.deck.deck)
    console.log(decks)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(deckTC())
    },[])



    return (
        <div>
            {/*{decks?.cardPacks.map((el))}*/}


        </div>
    );
};

