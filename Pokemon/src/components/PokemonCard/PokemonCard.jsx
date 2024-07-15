import { Link } from "react-router-dom"

export const Pokemon = ({pokemon}) => {
  return (
    <div  style={{padding:'2rem', display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
      <h3>Name: {pokemon.name}</h3>
      {/* <h4>Type: {pokemon.type}</h4>
      <h4>Special Attack: {pokemon['special-attack']}</h4> */}
      <img src={pokemon.imageLink} alt="pokemon" style={{ width: "100px", margin:'0 auto'}} />
      <Link to={pokemon.id} style={{marginTop:'1rem'}}>See more</Link>
</div>
   
  )
}
