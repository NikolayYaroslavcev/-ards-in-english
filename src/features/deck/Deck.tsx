import React, {ChangeEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {deskAddTC, getDeckTC, setUpdateDeskAC} from './deck-reducer';
import {SearchDesk} from './SearchDesk';
import {useSearchParams} from 'react-router-dom';
import useDebounce from '../../common/hooks/useDebounce';
import Table from './Table';
import PaginationBlock from '../../common/components/paginationBlock/PaginationBlock';
import HeaderDesk from '../../common/components/headerDesk/HeaderDesk';
import {AddModal} from '../../common/modals/AddModal';
import {DeleteModal} from '../../common/modals/DeleteModal';

export const Desk = () => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    // const [sortPacs, setSortPacs] = useState(false)


    const myId = useAppSelector(state => state.profile._id)
    const initialize = useAppSelector(state => state.deck.initialize)
    const isMy = useAppSelector(state => state.deck.isMy)
    const min = useAppSelector(state => state.deck.min)
    const max = useAppSelector(state => state.deck.max)
    const page = useAppSelector(state => state.deck.page)
    const pageCount = useAppSelector(state => state.deck.pageCount)
    const searchPackName = useAppSelector(state => state.deck.packName)
    const totalCount = useAppSelector(state => state.deck.cardPacksTotalCount)
    const totalPages = Math.floor(totalCount / pageCount)
    const sortPack = useAppSelector(state => state.deck.sortPacks)
    const debounceSearchDesk = useDebounce<string>(searchPackName, 500)


    useEffect(() => {
        if (initialize) {
            dispatch(getDeckTC())
        }
        setSearchParams(searchParams)
    }, [debounceSearchDesk, page, pageCount, min, max, isMy, sortPack])


    useEffect(() => {
        if (!initialize) {
            let isMyQuery = Boolean(searchParams.get('userId') === 'My')
            let pageCountQuery = Number(searchParams.get('pageCount') || 4)
            let pageQuery = Number(searchParams.get('page') || 1)
            let questionQuery = searchParams.get('packName') || ''
            let sortPackQuery = (searchParams.get('sortPack') as '0updated' | '1updated') || '0updated'
            let userIdPackQuery = (searchParams.get('user_id'))

            dispatch(
                setUpdateDeskAC({
                    isMy: isMyQuery,
                    page: pageQuery,
                    pageCount: pageCountQuery,
                    packName: questionQuery,
                    sortPacks: sortPackQuery,
                })
            )
            dispatch(getDeckTC())
        }
    }, [])

    const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUpdateDeskAC({packName: e.currentTarget.value}))
        searchParams.set('packName', e.currentTarget.value)
    }

    const onclickHandlerMy = () => {
        dispatch(setUpdateDeskAC({isMy: true}))
        searchParams.set('userId', 'My')
    }
    const onclickHandlerAll = () => {
        dispatch(setUpdateDeskAC({isMy: false}))
        searchParams.set('userId', '')
    }
    const filterReset = () => {
        searchParams.delete('min')
        searchParams.delete('max')
        searchParams.delete('page')
        searchParams.delete('pageCount')
        searchParams.delete('userId')
        searchParams.delete('packName')
        setSearchParams(searchParams)
        dispatch(
            setUpdateDeskAC({
                min: null,
                max: null,
                isMy: false,
                page: 1,
                pageCount: 4,
                sortPacks: '0updated',
                packName: ''
            })
        )
    }

    const onclickAddDeskHandler = () => {
        dispatch(deskAddTC())
    }
    const handleChangeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setUpdateDeskAC({pageCount: e.target.value}))
        searchParams.set('pageCount', e.target.value)
    };

    const onChangePageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setUpdateDeskAC({page}))
        searchParams.set('page', page.toString())
        setSearchParams(searchParams)
    }

    const sortPackHandler = (packName: string, sortPacsBull: boolean) => {
        if (packName === 'updated' && sortPacsBull) {
            dispatch(setUpdateDeskAC({sortPacks: '1updated'}))
            searchParams.set('sortPacks', '1updated')
        } else if (packName === 'updated' && !sortPacsBull) {
            dispatch(setUpdateDeskAC({sortPacks: '0updated'}))
            searchParams.set('sortPacks', '0updated')
        }
    }


    return (
        <>
            <AddModal />
            <DeleteModal/>
            <HeaderDesk onclickAddDeskHandler={onclickAddDeskHandler}/>
            <SearchDesk searchPackName={searchPackName}
                        isMy={isMy}
                        filterReset={filterReset}
                        onclickHandlerAll={onclickHandlerAll}
                        onChangeInputValueHandler={onChangeInputValueHandler}
                        onclickHandlerMy={onclickHandlerMy}
            />
            <Table myId={myId} sortPack={sortPackHandler}/>
            <PaginationBlock page={page}
                             onChangePageHandler={onChangePageHandler}
                             totalPages={totalPages}
                             pageCount={pageCount}
                             handleChangeSelectValue={handleChangeSelectValue}
            />

        </>
    )
}

