import React, { useEffect, useState } from 'react'
import { useFetchPoke } from './useFetchPoke';

export const callPoke = ( numPoke ) => {

    const [arrPoke, setArrPoke] = useState([]);
    let arrTemp = []
    console.log("De callPoke ->: ", numPoke)

    for (let i = 1; i <= numPoke; i++) {
        console.log( "hola" )
        let { objPoke } = useFetchPoke( i )
        arrTemp.push( objPoke );
    }

    useEffect(() => {
        setArrPoke( arrTemp )
    }, [ numPoke ])
    

    return {
        arrPoke, 
    }


}
