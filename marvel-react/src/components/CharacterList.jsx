import axios from 'axios'
import { useState, useEffect } from 'react'

const CharacterList = ({onSelect}) => {           //difference between const and func?

  const [characters, setCharacters] = useState('')

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
      setCharacters(response.data)
      }
    catch (error){
      console.error('error:', error)
    }
  }

  if (characters !== ''){     //what other way to do this? why does it console log 4 times?
  return (                    //why so long to load / why 20 results? / whats deal with class components
    <div id='container1'> 
      <ul id='list1'>
        {console.log(characters)}
        {characters.data.results.map((character)=> 
        <li key={character.id} onClick={() => onSelect(character.id)}> 
        <img src={character.thumbnail.path+'.jpg'} />
        <p>{character.name}</p></li>
        )}
      </ul>
    </div>
  )}
}

export default CharacterList