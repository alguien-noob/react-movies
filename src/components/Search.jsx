// import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery'

export const Search = () => {
    const query = useQuery();
    const search = query.get('search')
    
    // const [input, setInput] = useState('')
    const navigate = useNavigate()

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
                    navigate(`/?search=${value}`)
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
