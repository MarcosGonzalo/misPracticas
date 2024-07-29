import React, { useState } from 'react'

export const useCounter = ( initialValue ) => {
    const [ counter, setCounter ] = useState( initialValue )

    const increment = ( value = 1 ) => {
        setCounter(counter + value);
        console.log("lanzado desde use")
    }

    const decrement = ( value = 1 ) => {
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement
    }
}
