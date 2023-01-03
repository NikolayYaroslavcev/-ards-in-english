import {useTable} from 'react-table'
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {deckTC} from './deck-reducer';


export const Deck = () => {

    const decks = useAppSelector(state => state.deck.cardPacks)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(deckTC())
    }, [])


    const data = decks.map((el) => ({col1: el.name}))


    const columns = React.useMemo<any>(
        () => [
            {
                Header: 'Question',
                accessor: 'col1',
            },
            {
                Header: 'Answer',
                accessor: 'col2',
            },
            {
                Header: 'Last Updated',
                accessor: 'col3',
            },
            {
                Header: 'Grade',
                accessor: 'col4',
            },
            {
                Header: 'Actions',
                accessor: 'col5',
            },
        ],
        []
    )


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({data, columns});

    return (
        <table {...getTableProps()} style={{border: 'solid 1px blue'}}>
            <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                        background: 'papayawhip'
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}


// import React, {useEffect} from 'react';
// import {deckTC} from './deck-reducer';
// import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
//
//
// export const Deck = () => {
//
//     const decks = useAppSelector(state => state.deck.cardPacks)
//     console.log(decks)
//     const dispatch = useAppDispatch()
//
//     useEffect(() => {
//         dispatch(deckTC())
//     }, [])
//
//
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th></th>
//             </tr>
//             </thead>
//             <tbody>
//             <tr>
//                 <td></td>
//             </tr>
//             </tbody>
//         </table>
//     );
// };
