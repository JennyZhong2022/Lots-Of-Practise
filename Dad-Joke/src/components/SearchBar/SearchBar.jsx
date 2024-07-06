

const SearchBar = ({ searchTerm,setSearchTerm ,jokesQuantity, setJokesQuantity}) => {

const handleTermChange = (e) => {
    setSearchTerm(e.target.value)
   
}
  
const handleQuantityChange = (e) => {
setJokesQuantity(e.target.value)
}  


  
const handleSearchSubmit = (e) => {
  e.preventDefault()
  console.log(searchTerm);
  console.log(jokesQuantity);
  }  
  

const maxQuantity=10
  
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
    
      <input
          type="text"
          name='searchTerm'
          value={searchTerm}
          onChange={handleTermChange}
        />
      {/* <select name="quantity" value={jokesQuantity} onChange={handleQuantityChange}>
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
      </select> */}
    
        
      <select value={jokesQuantity} onChange={handleQuantityChange}>
      {Array.from({ length: maxQuantity }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i+1}
        </option>
      ))}
    </select>

        <button type="submit">Search</button>
  
      </form>
      

    

    </div>
  )
}

export default SearchBar