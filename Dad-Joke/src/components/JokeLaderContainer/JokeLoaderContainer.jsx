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
      }   
    }
    fetchDadJoke()
  }, [searchTerm,jokesQuantity,currentPage])
  



  
 
  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} jokesQuantity={jokesQuantity} setJokesQuantity={setJokesQuantity}  />

      {loading ?
       ( <Loading />) :
       ( <ul>
      {jokes.map((joke) => 
        <Joke key={joke.id} joke={joke.joke} />
      )
     }
      </ul>)
      }

      <JokesPagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  
  )
}

export default JokeLoaderContainer