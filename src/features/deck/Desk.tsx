import React from 'react';
import {useAppSelector} from '../../common/hooks/hooks';

export const Desk = () => {



    const decks = useAppSelector(state => state.deck.cardPacks)

    console.log(decks)

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

