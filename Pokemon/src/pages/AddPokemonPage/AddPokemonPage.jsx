import { useNavigate } from "react-router-dom"
import PokemonForm from "../../components/PokemonForm/PokemonForm"
import { createPokemon } from "../../services/pokemon"

const AddPokemonPage = () => {

  const navigate=useNavigate()

  const handleAddPokemon = (pokemonData) => {
    createPokemon(pokemonData).then((id) => {
      navigate(`/pokemons/${id}`)
    }).catch(e => {
      throw e.message
    })
  }
  return (
    <>
      <h1>
        Add a pokemon
      </h1>
      
      <PokemonForm onSubmit={handleAddPokemon} />
    </>
  )
}

export default AddPokemonPage