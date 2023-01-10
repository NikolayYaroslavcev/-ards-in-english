import * as React from 'react';
import {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import {RangeSliderStyle} from "./StyledDeck";
import {setUpdateDeskAC} from "./deck-reducer";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {useSearchParams} from "react-router-dom";

export const RangeSlider = () => {
   // const [valueInp, setValueInp] = useState<string>('')
    const minCardsCount = useAppSelector(state => state.deck.minCardsCount)
    const maxCardsCount = useAppSelector(state => state.deck.maxCardsCount)

   // const minVal = useAppSelector(state => state.deck.min)
    const [searchParams, setSearchParams] = useSearchParams()


    const min = Number(searchParams.get('min')) || minCardsCount
    const max = Number(searchParams.get('max')) || maxCardsCount

    const [value, setValue] = useState<number[]>([min, max])
    const dispatch = useAppDispatch()

   // const debounceSearch = useDebounce<number[]>(value, 500)

    useEffect(() => {
        console.log('use')
        setValue([min, max])
    }, [min, max])

    const handleChange = (event: any, newValue: number[] | number) => {
        setValue(newValue as number[])
    }

    const onChangeCommitted = (event: Event | React.SyntheticEvent, newValue: number[] | number) => {
        //console.log(newValue[0] as number)
        dispatch(setUpdateDeskAC({min: value[0].toString(), max: value[1].toString()}))
        searchParams.set('min', value[0].toString())
        searchParams.set('max', value[1].toString())
        setSearchParams(searchParams)
    }
    // const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch(setUpdateDeskAC({min: e.currentTarget.value}))
    //     searchParams.set('min', e.currentTarget.value)
    //     setSearchParams(searchParams)
    //     setValue([+e.currentTarget.value, max])
    //
    // }

    return (
        <RangeSliderStyle>
            <input type="text"
                   value={value[0]}
                // onChange={onChangeMinHandler}
                   onChange={() => {
                   }}
            />
            <Slider sx={{width: '150px'}}
                    getAriaLabel={() => 'Minimum distance'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={minCardsCount}
                    max={maxCardsCount}
                    onChangeCommitted={onChangeCommitted}
            />
            <input type="text"
                   value={value[1]}
                   onChange={() => {
                   }}
            />
        </RangeSliderStyle>
    );
}


//
//  const minCardsCount = useAppSelector(state => state.deck.minCardsCount)
//  const maxCardsCount = useAppSelector(state => state.deck.maxCardsCount)
//
//  const [value, setValue] = React.useState<number[]>([0, 100]);
// // setValue([minCardsCount, maxCardsCount])
//
//  const handleChange = (
//      event: Event,
//      newValue: number | number[],
//      activeThumb: number,
//  ) => {
//      console.log(activeThumb)
//      if (!Array.isArray(newValue)) {
//          return;
//      }
//
//      if (activeThumb === 0) {
//          setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
//        // onChangeMinHandler(value[0])
//      } else {
//          setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
//      }
//  };
