import React, { useMemo, useState } from 'react'
import { useCounter } from './useCounter'
import { Small } from './Small';


const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) { 
        console.log("Iterando...")
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(300);
    const [show, setShow] = useState(true)

    const valueMemorize = useMemo(() => heavyStuff( counter ), [ counter ])
    // console.log( counter, increment )
  return (
      <>
          <h1>Counter: <Small value={ counter } /> </h1>
          <hr />

          <h4>{ valueMemorize  }</h4>

          <button className='btn btn-primary' onClick={() => increment()}> +1 </button>
          
          <button
                className='btn btn-outline-primary'
                onClick={ () => setShow( !show ) }
          >
              Show\Hide { JSON.stringify( show ) }
          </button>
      </>
)
}
