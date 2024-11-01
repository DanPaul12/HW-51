import './App.css'
import { useState, useEffect } from 'react'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'

function App() {

  const [characterID, setCharacterID] = useState(null)
 
  const handleSelect = (selectedCharacter) => {
    setCharacterID(selectedCharacter)
  }
                                
  return (                    
    <div id='container'> 
        <CharacterList />
        
    </div>
  )}


export default App
