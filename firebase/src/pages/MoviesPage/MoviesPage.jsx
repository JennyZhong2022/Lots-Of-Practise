
import { getMoviesCollection } from '../../services/movie-service'
import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard'


const MoviesPage = () => {


  const [movies, setMovies] = useState()
  

 
  const fetchMovies = async () => {
      const moviesCollection = await getMoviesCollection();
      setMovies(moviesCollection);
    };
  
  
  useEffect(() => {
    fetchMovies();
    }, []);

  // useEffect(() => {
  //   getMoviesCollection().then(data => setMovies(data));
  // },[])
  
  console.log('movies',movies);
  return (
  <div  style={{display:'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
      {movies && movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
   
    </div>
    
  )
}

export default MoviesPage