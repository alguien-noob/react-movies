import React from 'react'
import { Link } from 'react-router-dom'
import { getPosterImg } from '../utils/getPosterImg'
import styles from './MovieCard.module.css'

export const MovieCard = ({ movie }) => {
    const { title, poster_path, id } = movie
    const imgUrl = getPosterImg(poster_path, 300)
    return (
        <li className={styles['movie-card']}>
            <Link to={`movie/${id}`} >
                <img className={styles['movie-img']} src={imgUrl} alt={title} />
            </Link>
            <p>{title}</p>
        </li>
    )
}
