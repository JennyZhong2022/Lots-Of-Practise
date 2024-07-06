import { useState,useEffect } from "react"
import Joke from "../Joke/Joke"
import SearchBar from "../SearchBar/SearchBar"
import JokesPagination from "../JokesPagination/JokesPagination"
import Loading from "../Loading/Loading"



const JokeLoaderContainer = () => {
  const [jokes, setJokes]=useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [jokesQuantity, setJokesQuantity] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)

  

  

  useEffect(() => {
   

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
          throw new error ("Something Wrong")
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
    fetchDadJoke()
    console.log(jokes);
  }, [searchTerm, jokesQuantity, currentPage])
  
  // [searchItem, jokesQuantity, currentPage])
  // use isSubmitted rather than searchTerm as searchTerm fetch the data every time when typing changes


  
jokes.map((joke) => console.log(joke));
  


  
 
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        jokesQuantity={jokesQuantity}
        setJokesQuantity={setJokesQuantity}  />

      {loading ?
       ( <Loading />) :
        ( 
          <div>
            { jokes.length === 0 && <h3>Can't find Joke...</h3>}


          {jokes.length > 0 && (
            <ul>
              {jokes.map((joke) => (
                <Joke key={joke.id} joke={joke.joke} />
              ))}
            </ul>
          )}
          { jokes.length < jokesQuantity && jokes.length > 0 && <h3>No More Jokes...</h3>}
        </div>
        )
      }

   

      <JokesPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchTerm={searchTerm}
        jokes={jokes}
        jokesQuantity={jokesQuantity}
       
      
      />
    </>
  
  )
}

export default JokeLoaderContainer