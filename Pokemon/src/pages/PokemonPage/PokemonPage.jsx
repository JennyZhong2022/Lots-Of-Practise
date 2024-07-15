import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { deletePokemon } from '../../services/pokemon'

const PokemonPage = ({ pokemon }) => {

  const navigate=useNavigate()
  
  const handleDeletePokemon = () => {
    const confirm=window.confirm('Are you sure?')
    if (confirm) {
      deletePokemon(pokemon.id).then(() => {
        navigate('/pokemons')
      }).catch(e=>console.log(e))
   } 
}

  return (
    <div style={{padding:'2rem', display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
    <h3>Name: {pokemon.name}</h3>
      <h4>Type: {pokemon.type}</h4>
      <h4>HP: {pokemon.hp}</h4>
    <h4>Special Attack: {pokemon['special-attack']}</h4>
      <img src={pokemon.imageLink} alt="pokemon" style={{ width: "100px", margin: '0 auto' }} />

      <Link to='edit'><button style={{ padding: '10px 20px', backgroundColor: 'green', width: '15vw', color: '#FFF', border: 'none', margin:'0 auto',marginTop:'2rem', borderRadius: '4px', cursor: 'pointer' }}>Edit Pokemon</button></Link>
      
      <button onClick={handleDeletePokemon}
      
      style={{ padding: '10px 20px', backgroundColor: 'red', width: '15vw', color: '#FFF', border: 'none', margin:'0 auto',marginTop:'2rem', borderRadius: '4px', cursor: 'pointer' }}
      
      >Delete Pokemon</button>
    </div>
  )
}

export default PokemonPage