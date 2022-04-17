import placeholder from '../placeholder.jpg'
export const getPosterImg = (path, width = 300) => 
path ? `https://image.tmdb.org/t/p/w${width}${path}` :  placeholder