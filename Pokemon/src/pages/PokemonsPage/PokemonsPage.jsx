import { useEffect, useState } from "react"
import { getAllPokemon } from "../../services/pokemon"
import { Pokemon } from "../../components/PokemonCard/PokemonCard"




const PokemonsPage = () => {
const [pokemons,setPokemons]=useState([])


  useEffect(() => {
    getAllPokemon()
      .then((data) => setPokemons(data))
      .catch(e => console.log(e))
  
  }, [])
  
  console.log(pokemons);
  

  return (
    <main>

      <h1>Pokemons</h1>
   
      <section  style={{display:'flex', flexWrap:'wrap'}}>
        {pokemons.map((pokemon) =>
      <Pokemon key={pokemon.id} pokemon={pokemon} />  
      )
          }
      </section>
  
   
      


    </main>

    


  )
}

export default PokemonsPage