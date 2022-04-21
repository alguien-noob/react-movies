// import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
// import { useQuery } from '../hooks/useQuery'  //--update V6

export const Search = () => {
    // const query = useQuery();
    // const search = query.get('search')
    const [query, setQuery] = useSearchParams();
    const search = query.get('search')

    
    // const [input, setInput] = useState('')
    // const navigate = useNavigate() // update v 6

    const handleSubmit = e => {
        e.preventDefault();
        // navigate(`/?search=${input}`)
    }

    // useEffect(() => {
    //     setInput(search || '')
    // }, [search])
    
    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.box}>

                <input 
                className={styles.input} 
                autoFocus
                onChange={e => {
                    const value = e.target.value
                    // setInput(value)
                    // navigate(`/?search=${value}`) // update v6
                    setQuery({search: value})
                    console.log(setQuery)
                }} 
                value={search ?? ''} 
                type="text" />

                <button className={styles.button} type="submit" >
                    <FaSearch size={20} />
                </button>

            </div>
        </form>
    )
}
