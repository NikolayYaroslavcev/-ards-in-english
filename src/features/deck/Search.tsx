import React, {ChangeEvent, useCallback, useContext, useState} from 'react';
import debounce from 'lodash.debounce'
import search from '../../assets/img/search.svg'



export const Search = () => {

    // const {setSearchValue} = useContext(SearhContext)

    const [value, setValue] = useState('')


    const updateSearchValue = useCallback(
        debounce((str) => {
            console.log('Hello')
            // setSearchValue(str)
        }, 500), []
    )


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        updateSearchValue(e.currentTarget.value)
    }

    return (
        <>
            <input value={value}
                   onChange={onChangeHandler}
                   type="text"
                   placeholder={'Provide your text'}
            />
            <a href="#"><img src={search} alt=""/></a>

            <button>My</button>
            <button>All</button>
        </>
    );
};

