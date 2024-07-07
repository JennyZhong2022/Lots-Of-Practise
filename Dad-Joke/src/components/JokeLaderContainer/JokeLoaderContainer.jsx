import { useState,useEffect } from "react"
import Joke from "../Joke/Joke"
import SearchBar from "../SearchBar/SearchBar"
import JokesPagination from "../JokesPagination/JokesPagination"
import Loading from "../Loading/Loading"
import styles from './JokeLoaderContainer.module.scss'



const JokeLoaderContainer = () => {
  const [jokes, setJokes]=useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [jokesQuantity, setJokesQuantity] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [isSearchClicked, setIsSearchClicked] = useState(false)


  


    const fetchDadJoke = async () => {
      setLoading(true)  // loading
      const url = `https://icanhazdadjoke.com/search?term=${searchTerm}&page=${currentPage}&limit=${jokesQuantity}`
      try {
        const response = await fetch( url,{
          headers: {
            'Accept': 'application/json'
          }
        })
      
        if (!response.ok) {
          throw new Error ("Something Wrong")
        }
        const data = await response.json()
           
        setJokes(data.results)
       
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)  //stop loading
        // setIsSubmitted(false)
      }   
    }
    
  
  // [searchItem, jokesQuantity, currentPage])
  // use isSubmitted rather than searchTerm as searchTerm fetch the data every time when typing changes


  useEffect(() => {
   
    if (isSearchClicked) {
      fetchDadJoke()
    } 
    setIsSearchClicked(false)
    // console.log(jokes);
  }, [isSearchClicked,searchTerm, jokesQuantity, currentPage])


  
// jokes.map((joke) => console.log(joke));
  
console.log(isSearchClicked);

  
 
  return (
    <div className={styles.loadContainer}> {/* Use regular class name without styles */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        jokesQuantity={jokesQuantity}
        setJokesQuantity={setJokesQuantity}
        setIsSearchClicked={setIsSearchClicked}
      />

      {loading ? (
        <div >
          <Loading className={styles.loading} />
        </div>
      ) : (
        <div>
          {/* {!isSearchClicked && jokes.length === 0 && (
            <div  className={`${styles.message} ${styles["no-jokes"]}`}>
              <h3>Can't find Joke...</h3>
            </div>
          )} */}

          {jokes.length > 0 && (
            <ul>
              {jokes.map((joke) => (
                <Joke key={joke.id} joke={joke.joke} />
              ))}
            </ul>
          )}

          { jokes.length < jokesQuantity && jokes.length > 0 && (
            <div className={styles.message}>
              <h3>No More Jokes...</h3>
            </div>
          )}
        </div>
      )}

      <div className={styles.paginationContainer}>
        <JokesPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          jokes={jokes}
          jokesQuantity={jokesQuantity}
          setIsSearchClicked={setIsSearchClicked}
        />
      </div>
    </div>
  )
}

export default JokeLoaderContainer