import React, { useEffect, useState } from 'react'

export const useFetchPoke = ( numPoke ) => {


    const [arrPoke, setArrPoke] = useState([{ url:"basico", name: "basico"}]);

    let arrTemp = []

    const getFetch = async () => {

        for (let i = 1; i <= numPoke; i++) { 
            console.log( "de use -> " ,i)
            let url = `https://pokeapi.co/api/v2/pokemon/${ i }`
            let resp= await fetch(url)
            let dataPoke = await resp.json()
            console.log(dataPoke, "****************************************************************")

            arrTemp.push({
                url: dataPoke.sprites.front_default,
                url_back: dataPoke.sprites.back_default,
                name: dataPoke.species.name
            })
        }
        setArrPoke( arrTemp )
    }

    useEffect(() => {
      getFetch()
    
    }, [ numPoke ])
    

    return {
        arrPoke,
    }
}
