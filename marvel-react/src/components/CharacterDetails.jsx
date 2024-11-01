import axios from 'axios'
import { useState, useEffect } from 'react'


const CharacterDetails = ({characterID}) => {
    
    const [characterData, setCharacterData] = useState(null)

    useEffect(()=>{
        if (characterID !== null){
            fetchCharacter(characterID)
        }
    }, [characterID])

    const fetchCharacter= async (id) => {
        if (id !== null)
        try{
            const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
            setCharacterData(response.data)
        } catch (error){
            console.error(error)
        }
        }



return(
    <div id = 'container2'>
        {console.log(characterData)}
        <h3>{characterData && characterData.data.results[0].name}</h3>
        <p>{characterData && characterData.data.results[0].description}</p>
        <ul>
            {characterData && characterData.data.results[0].comics.items.map((comic)=>(
                <li key={comic.name}>{comic.name}</li>
            ))}
        </ul>
    </div>

)


}

export default CharacterDetails