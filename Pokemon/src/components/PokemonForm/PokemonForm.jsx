import { useEffect, useState } from "react"


const PokemonForm = ({handleUpdatePokemon,handleAddPokemon, formType,mode='Add', pokemon}) => {


  const [formData, setFormData] = useState({
    name: '',
    imageLink: '',
    hp: '',
    'special-attack': '',
    type:''

  })
  
  useEffect(() => {
    setFormData({...formData,...pokemon})
  },[pokemon])


  // same as below:

  // useEffect(() => {
  //   if (pokemon) {
  //     setFormData({
  //       name: pokemon.name || '',
  //       imageLink: pokemon.imageLink || '',
  //       hp: pokemon.hp || '',
  //       'special-attack': pokemon['special-attack'] || '',
  //       type: pokemon.type || ''
  //     });
  //   }
  // }, [pokemon]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:event.target.name==='hp'? Number(event.target.value): event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formType === 'add')
    { handleAddPokemon(formData) }
    else if (formType === 'edit') {
      handleUpdatePokemon(formData)
   }
  
  }


  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="nameInput" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="imageLinkInput" style={{ display: 'block', marginBottom: '5px' }}>Image Link</label>
        <input
          type="text"
          id="imageLinkInput"
          name="imageLink"
          value={formData.imageLink}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="hpInput" style={{ display: 'block', marginBottom: '5px' }}>HP</label>
        <input
          type="number"
          id="hpInput"
          name="hp"
          value={formData.hp}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="specialAttackInput" style={{ display: 'block', marginBottom: '5px' }}>Special Attack</label>
        <input
          type="text"
          id="specialAttackInput"
          name="special-attack"
          value={formData['special-attack']}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="typeInput" style={{ display: 'block', marginBottom: '5px' }}>Type</label>
        <input
          type="text"
          id="typeInput"
          name="type"
          value={formData.type}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#FFF', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{mode} Pokemon</button>
      </div>
    </form>
  );
};

export default PokemonForm