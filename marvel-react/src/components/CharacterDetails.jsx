import axios from 'axios'
import { useState, useEffect } from 'react'


const CharacterDetails = (characterID) => {

    useEffect(()=>{
        if (characterID){
            const response = axios.get()
        }
    })



return(
    <div>
        {console.log(characterID)}
    </div>

)


}

export default CharacterDetails