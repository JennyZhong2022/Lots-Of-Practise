
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsPage from './pages/PokemonsPage/PokemonsPage';
import LandingPage from './pages/LandingPage/LandingPage';
import AddPokemonPage from './pages/AddPokemonPage/AddPokemonPage';
import PokemonLoader from './containers/PokemonLoader/PokemonLoader';
import EditPokemonPage from './pages/EditPokemonPage/EditPokemonPage';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path='/' element={<LandingPage />}> </Route>
          <Route path='/pokemons' element={<PokemonsPage />}> </Route>
          <Route path='/pokemons/:id' element={<PokemonLoader />}> </Route>
          <Route path='/pokemons/add' element={<AddPokemonPage />}></Route>
          <Route path='/pokemons/:id/edit' element={<EditPokemonPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
