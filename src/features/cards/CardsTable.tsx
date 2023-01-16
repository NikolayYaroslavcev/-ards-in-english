import React, {useEffect} from "react";
import {useTable} from "react-table";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {deleteCardTC, getCardsTC, updateCardTC} from "./cards-reducer";
import {ActionBlock, ArrowTableBlock, Table} from "./style-cards";
import polygon from '../../assets/img/Polygon.svg'
import deleteIcon from '../../assets/img/Delete.svg'
import edit from '../../assets/img/Edit.svg'
import {useSearchParams} from "react-router-dom";
import {Rating} from "@mui/material";

export const CardsTable = (props: any) => {
    const data = useAppSelector(state => state.cards.cards)
    const dispatch = useAppDispatch()

    const columns = React.useMemo<any>(() => [
        {
            Header: 'Question',
            accessor: 'question',
        },
        {
            Header: 'Answer',
            accessor: 'answer',
        },
        {
            Header: 'Last Updated',
            accessor: 'updated',

        },
        {
            Header: 'Grade',
            accessor: 'grade',
            Cell: (props: any) => {
                return (
                    <Rating name="read-only" value={props.row.original.grade} readOnly/>
                )
            }
        },
        {
            Header: 'Actions',
            Cell: (props: any) => {
                return (
                    <ActionBlock>
                        <img src={edit} onClick={() => dispatch(updateCardTC(props.row.original._id, ''))} alt=""/>
                        <img src={deleteIcon} onClick={() => {
                            dispatch(deleteCardTC(props.row.original._id))

                        }} alt=""/>
                    </ActionBlock>
                )
            },
        },
    ], [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return (
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
    )
}
