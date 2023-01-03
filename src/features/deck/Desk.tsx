import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import polygon from '../../assets/img/Polygon.svg'
import deleteIcon from '../../assets/img/Delete.svg'
import edit from '../../assets/img/Edit.svg'
import {deckTC, deskDeleteTC, deskUpdateTC} from './desk-reducer';
import {ArrowTableBlock, Table} from './StyledDeck';
import {Search} from './Search';
import {useTable} from 'react-table';
import {log} from 'util';

export const Desk = () => {

    const [searchValue, setSearchValue] = useState('')

    const data = useAppSelector(state => state.deck.cardPacks)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(deckTC())
    }, [])

    const columns = React.useMemo<any>(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Cards',
                accessor: 'cardsCount',
            },
            {
                Header: 'Last Updated',
                accessor: 'updated',

            },
            {
                Header: 'Created by',
                accessor: 'user_name',

            },
            {
                Header: 'Actions',
                Cell: (props: any) => {
                    return (
                        <div>
                            <img src={edit}
                                 onClick={() => dispatch(deskUpdateTC(props.row.original._id,''))}
                                 alt=""/>
                            <img src={deleteIcon} onClick={() => dispatch(deskDeleteTC(props.row.original._id))}
                                // {/*<img src={deleteIcon} onClick={() => console.log(props.row.original._id)}*/}
                                 alt=""/>
                        </div>
                    )
                },
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})


    return (
        <>
            <Search/>
            <Table {...getTableProps()} >
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                            >
                                {
                                    column.Header === 'Last Updated'
                                        ? <ArrowTableBlock>
                                            <p>{column.render('Header')}</p>
                                            <img
                                                src={polygon}
                                                alt="polygon"
                                                onClick={() => {
                                                    console.log('asd')
                                                }}
                                            />
                                        </ArrowTableBlock>
                                        : column.render('Header')
                                }
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    )
}

