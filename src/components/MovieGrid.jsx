import React, { useEffect, useState } from 'react'
import { get } from '../utils/httpClient'
import { MovieCard } from './MovieCard'
import styles from './MovieGrid.module.css'
import { Spinner } from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Empty } from './Empty'

// import db from '../api-local/movies.json'

export const MovieGrid = ({ search }) => {
    const [db, setDb] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)
    
    
    useEffect(() => {
        setIsLoading(true)
        const fn = async () => {
            const urlSearch = search
            ? `search/movie?query=${search}&page=${page}`
            : `discover/movie?page=${page}`
            let resp = await get(urlSearch)
            // eslint-disable-next-line no-unused-expressions
            resp instanceof Error ? null : setDb(previousDb =>  previousDb.concat(resp.results))
            setHasMore(resp.page < resp.total_pages)
            setIsLoading(false)
        }
        fn()
    },[search, page])

    if(!isLoading && db.length === 0) return <Empty />
    return (
        <InfiniteScroll 
        dataLength={db.length} 
        hasMore={hasMore} 
        loader={<Spinner/>}
        next={() => setPage(previousPage => previousPage + 1)} >

            <ul className={styles['movies-grid']}>
                {db.map(mov => <MovieCard movie={mov} key={mov.id} />)}
            </ul>

        </InfiniteScroll>
    )
}
