import axios from 'axios'
import './App.css'

function App() {

  const getCharacter = async (marvelname) =>{
    const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${marvelname}&limit=1&ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
    const character = response.data 
    return character
  }
  return (
    <div id='container'>
      {getCharacter('nightcrawler')}
    </div>
  )
}

export default App
