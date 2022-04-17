import React from 'react'
import { MovieGrid } from '../components/MovieGrid'
import { Search } from '../components/Search'
import { useDebounce } from '../hooks/useDebounce';
import { useQuery } from '../hooks/useQuery';

export const LandingPage = () => {
    const query = useQuery();
    const search = query.get('search')
    const debouncedSearch = useDebounce(search, 2000)
    return (
        <>
            <Search/>
            <MovieGrid key={debouncedSearch} search={debouncedSearch} />
        </>

    )
}
