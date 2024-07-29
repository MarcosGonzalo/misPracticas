import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {

    const [value, setValue] = useState("")
    const [counter, setCounter] = useState(1)
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    const setValueFrom = ( event ) => {
        let value = Number(event.target.value);
        setValue( value )
    }

    const onBucar = () => {
        setCounter( value ) 
        setValue("")
    }
   
    
    useEffect(() => {
      
        console.log(" **************Montado******************")
    
      return () => {
        console.log(" **************Desmontado*****************")
      }
    }, [])
    

    return (
      <>
            <h1>Esto es una app de Pokemonos: {counter}</h1>
            <hr />            

            {isLoading
                ? <LoadingMessage /> 
                : <PokemonCard  {...data} />
            }
            
            {/* <p>{JSON.stringify(data?.name)}</p> */}

            <button
                onClick={() => counter > 1 ? setCounter(counter - 1) : null}
            > anterior </button>

            <button
                onClick={() => setCounter(counter + 1)}
            > siguiente</button>

            <input type="number" onChange={e => setValue(+e.target.value) } value={ value } placeholder='Ingresa el ID pokemon' />
            <button onClick={() => onBucar()}>Buscar</button>
      </>
    )
}
