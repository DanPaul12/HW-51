import './App.css'
import { useState, useEffect } from 'react'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'

function App() {

  const [characterID, setCharacterID] = useState(null)
 
  const handleSelect = (character) => {
    setCharacterID(character)}

                                
  return (                    
    <div id='container'> 
        <CharacterList onSelect = {handleSelect}/>
        <CharacterDetails characterID = {characterID} />
    </div>
  )}


export default App
