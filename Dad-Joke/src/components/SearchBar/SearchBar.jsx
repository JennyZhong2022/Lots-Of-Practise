

const SearchBar = ({ searchTerm,setSearchTerm ,jokesQuantity, setJokesQuantity}) => {

const onTermChange = (e) => {
    setSearchTerm(e.target.value)
   
}
  
  const onQuantityChange = (e) => {
  setJokesQuantity(e.target.value)
}  
  
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm);
    console.log(jokesQuantity);
}  
  return (
    <div>
      <form onSubmit={onSubmit}>
    
      <input
          type="text"
          name='searchTerm'
          value={searchTerm}
          onChange={onTermChange}
        />
      <select name="quantity" value={jokesQuantity} onChange={onQuantityChange}>
          <option value="Select">Quantity</option> 
          <option value="1">1</option>
          <option value="2">2</option>  
          <option value="3">3</option>  
          <option value="4">4</option>  
          <option value="5">5</option>  
          <option value="6">6</option>  
          <option value="7">7</option>  
          <option value="8">8</option>
          <option value="9">9</option>   
      </select>
    
      <button type="submit">Search</button>
      </form>
      
    </div>
  )
}

export default SearchBar