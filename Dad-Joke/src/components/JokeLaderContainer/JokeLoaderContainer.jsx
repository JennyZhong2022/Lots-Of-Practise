import { useState,useEffect } from "react"
import Joke from "../Joke/Joke"
import SearchBar from "../SearchBar/SearchBar"



const JokeLoaderContainer = () => {
  const [jokes, setJokes]=useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [jokesQuantity, setJokesQuantity] = useState(0)
  const [page,setPage]=useState(1)

  useEffect(() => {
  const url= `https://icanhazdadjoke.com/search?term=${searchTerm}&page=1&limit=${jokesQuantity}`
    const fetchDadJoke = async() => {
      const response = await fetch( url,{
        headers: {
          'Accept': 'application/json'
        }
      })
      const data =await response.json()
      console.log(data);
      setJokes(data.results)
      console.log(jokes);
    }
    fetchDadJoke()
  }, [searchTerm,jokesQuantity])
  

  {jokes.map((joke) => {
    console.log(joke.joke)
  })
 }

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} jokesQuantity={jokesQuantity} setJokesQuantity={setJokesQuantity} />
      <ul>
      {jokes.map((joke) => 
        <Joke key={joke.id} joke={joke.joke} />
      )
     }
    </ul>
    </>
  
  )
}

export default JokeLoaderContainer