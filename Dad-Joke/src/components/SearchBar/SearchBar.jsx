import styles from './SearchBar.module.scss'; 

const SearchBar = ({ searchTerm,setSearchTerm ,jokesQuantity, setJokesQuantity,setIsSearchClicked}) => {

const handleTermChange = (e) => {
    setSearchTerm(e.target.value)
   
}
  
const handleQuantityChange = (e) => {
setJokesQuantity(e.target.value)
}  


  
const handleSearchSubmit = (e) => {
  e.preventDefault()
  setIsSearchClicked(true)
  console.log(searchTerm);
  console.log(jokesQuantity);
  }  
  

const maxQuantity=10
  
  return (
    <div className={styles.searchContainer}>
      <h2 style={{display:'flex', justifyContent:'center', alignContent:'center'}}>Find Your Favorite Dad Joke</h2>
    <form onSubmit={handleSearchSubmit}>

      <input
        className={styles.inputField}
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={handleTermChange}
        placeholder="Enter search term"
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
    
        <select className={styles.selectBox} value={jokesQuantity} onChange={handleQuantityChange}>

        {/* “The first parameter _ represents the current element’s value, but since we don’t need the value here, we use _ as a placeholder as we only need index.” */}
          {Array.from({ length: maxQuantity }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <button className={styles.submitButton} type="submit">
          Search
        </button>

      </form>
    </div>
  )
}

export default SearchBar




