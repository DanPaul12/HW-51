import './App.css'
import { useState, useEffect } from 'react'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage'
import ComicsPage from './components/ComicsPage'
import NavBar from './components/NavBar'
import { useParams } from 'react-router-dom'


function App() {

  const [characterID, setCharacterID] = useState(null)
 
  const handleSelect = (character) => {
    setCharacterID(character)}

  const params = useParams()

                                
  return (                    
    <div id='container'> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/characters' element= {<CharacterList onSelect = {handleSelect}/>} />
        <Route path='/characters/:id' element= {<CharacterDetails params={params} characterID = {characterID}/>} />
        <Route path='/comics' element={<ComicsPage/>}/>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>  
    </div>
  )}


export default App
