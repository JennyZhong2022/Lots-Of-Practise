import React, { useEffect, useState } from 'react'
import PokemonPage from '../../pages/PokemonPage/PokemonPage'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../../services/pokemon'

const PokemonLoader = () => {
  const {id}=useParams()

  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [fetchStatus, setFetchStatus]=useState('')
  
  useEffect(() => {
    setFetchStatus('LOADING')
    getPokemonById(id).then((data) => {
      setFetchStatus('SUCCESS')
      setPokemon(data)
    }).catch(error => {
      setFetchStatus("FAILED")
      setError(error)
    })
  },[id])

console.log(pokemon);

  return (
    <>
      {fetchStatus==="LOADING" && <p>Loading</p> }
      {fetchStatus === "FAILED" && <p>{error.message}</p> }
      {fetchStatus === "SUCCESS" && <PokemonPage pokemon={pokemon} /> }
    </>
  )
}

export default PokemonLoader