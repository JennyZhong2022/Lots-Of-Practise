
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import MoviePage from './pages/MoviePage/MoviePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import NavBar from './components/NavBar/NavBar';


function App() {

  // const [movies, setMovies] = useState()
  

 
  // const fetchMovies = async () => {
  //     const moviesCollection = await getMoviesCollection();
  //     setMovies(moviesCollection);
  //   };
  
  
  // useEffect(() => {
  //   fetchMovies();
  //   }, []);

  // useEffect(() => {
  //   getMoviesCollection().then(data => setMovies(data));
  // },[])
  
  // console.log('movies',movies);



  return (
    <>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LandingPage />}> </Route>
          <Route path='/movies' element={<MoviesPage/>}> </Route>
          <Route path='/movies/:id' element={<MoviePage/>}> </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
