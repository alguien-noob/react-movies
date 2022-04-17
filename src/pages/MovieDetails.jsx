import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Spinner } from '../components/Spinner'
import { getPosterImg } from '../utils/getPosterImg'
import { get } from '../utils/httpClient'
// import movies from '../api-local/movies.json'
import styles from './MovieDetails.module.css'

// const genres = [{id:1, name: 'action'},{id:2, name: 'terror'}]
export const MovieDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    // const movie = movies.find(mov => mov.id === parseInt(id))
    useEffect(() => {
        setIsLoading(true)
        get(`movie/${id}`).then(data => {
            setMovie(data)
            setIsLoading(false)
        })
    },[id])
    if(isLoading) return <Spinner />
    if(!movie) return null
    // const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}` 
    const imgUrl = getPosterImg(movie.poster_path, 500) 
    return (
        <div className={styles['details-container']}>
            <img className={`${styles.col} ${styles['movie-image']}`} src={imgUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles['movie-details']}`}>
                <p><strong>Title: </strong> {movie.title}</p>
                <p><strong>Gener: </strong>{movie.genres.map(g => g.name).join(', ')}</p>
                <p><strong>description: </strong> {movie.overview}</p>
            </div>
        </div>
    )
}
