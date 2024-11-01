import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [character, setCharacter] = useState('')

  useEffect(() => {
    getCharacter('nightcrawler')
  }, [])

  const getCharacter = async (marvelname) =>{
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${marvelname}&limit=1&ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
      setCharacter(response.data)
      }
    catch (error){
      console.error(error)
    }
  }
  return (
    <div id='container'>
      <h3>Name:</h3>
      {console.log(character.data.results[0].name)}
    </div>
  )
}

export default App
