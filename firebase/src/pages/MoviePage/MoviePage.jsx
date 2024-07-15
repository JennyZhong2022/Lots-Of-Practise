import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieById } from "../../services/movie-service"
import styles from "./MoviePage.module.scss";


export const MoviePage = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  

  useEffect(() => {
    getMovieById(id).then((data)=>setMovie(data))
  }, [id])
  
  console.log(movie);

  return (
    <>
    {!movie ? (
      <p>...loading</p>
    ) : (
        <div>
        <h2>{movie.title}</h2>
        <img src={movie.imageLink} className={styles.Img} />
      </div>
    )}
  </>
  )
}

export default MoviePage