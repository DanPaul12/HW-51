import axios from 'axios'
import { useState, useEffect } from 'react'


const CharacterDetails = (characterID) => {
                                                //main reason to use state is...
    useEffect(()=>{
        if (characterID){
            fetchCharacter(characterID)
        }
    }, [characterID])

    const fetchCharacter= async (id) => {
        await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
    }



return(
    <div>
        {console.log(characterID)}
    </div>

)


}

export default CharacterDetails