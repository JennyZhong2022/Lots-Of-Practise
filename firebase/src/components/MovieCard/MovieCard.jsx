import { Link } from "react-router-dom"


const MovieCard = ({movie}) => {
  return (
    
    <div key={movie.id} style={{padding: '2rem', backgroundColor:'lightgreen', margin: '0.3rem', width:'150px'}}>
      <h3>Title:{movie.title}</h3>
      <p>Director:{movie.director}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Review: {movie.review}</p>
    
      <Link to={`/movies/${movie.id}`}>      {/* same as to={movie.id} */}
        See more
      </Link>
  </div>

  
  )
}

export default MovieCard