import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import polygon from '../../assets/img/Polygon.svg'
import deleteIcon from '../../assets/img/Delete.svg'
import edit from '../../assets/img/Edit.svg'
import {ArrowTableBlock, Table} from './StyledDeck';
import {useTable} from 'react-table';
import {getDeckTC, deskAddTC, deskDeleteTC, deskUpdateTC} from "./deck-reducer";
import {CardsHeaderStyle} from "../cards/style-cards";
import {StyledButton} from "../../common/components/style/Button/StyledButton";
import {SearchDesk} from "./SearchDesk";

export const Desk = () => {

    const [searchValue, setSearchValue] = useState('')

    const data = useAppSelector(state => state.deck.cardPacks)
    const dispatch = useAppDispatch()


    useEffect(() => {
      //  dispatch(getDeckTC())
    }, [])

    const onclickHandler = () => {
        dispatch(deskAddTC())
    }

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
                                 onClick={() => dispatch(deskUpdateTC(props.row.original._id, ''))}
                                 alt=""/>
                            <img src={deleteIcon} onClick={() => dispatch(deskDeleteTC(props.row.original._id))}
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
            <CardsHeaderStyle>
                <p>Packs list</p>
                <StyledButton onClick={onclickHandler}>Add new pack</StyledButton>
            </CardsHeaderStyle>
             {/*Search*/}
            <SearchDesk/>

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