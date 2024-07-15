import React, { useEffect, useState } from 'react'
import PokemonForm from '../../components/PokemonForm/PokemonForm'
import { getPokemonById, updatePokemonByID } from '../../services/pokemon'
import { useNavigate, useParams } from 'react-router-dom'

const EditPokemonPage = () => {
  const { id } = useParams()
  const navigate=useNavigate()
  

 const [pokemon,setPokemon]=useState(null)

  useEffect(() => {
    if (id) {
      getPokemonById(id)
      .then((data) => {
        setPokemon(data)
      })
      .catch(e => console.log(e))
    }
  }, [id])
  
  const handleUpdatePokemon = (pokemon) => {
    updatePokemonByID(id, pokemon).then(() => {
      navigate(`/pokemons/${id}`)
    }).catch(e=>console.log(e))
  }
  
  console.log(pokemon);

  return (
    <>
    <h1>EditPokemonPage</h1>
  
     {pokemon && <PokemonForm mode="Update" pokemon={pokemon} handleUpdatePokemon={handleUpdatePokemon} formType='edit'/>} 
    </>
  )
}

export default EditPokemonPage