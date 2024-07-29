import React, { useState } from 'react'
import { Input } from './Input'
import { useForm } from './customHook/useForm'
import { Galery } from './Galery'

export const App = () => {

    const [numPoke, setNumPoke] = useState(0)
    const [show, setShow] = useState(true)

    const setChangeNumPoke = ( newValue ) => {
        setNumPoke( newValue )
    }

  return (
      <>
        {/* title */}
          <h1 className='title'>Bienvenido a PokeWeb</h1>
          {/* input */}
          <div className='content-input'>
              <Input setNumPoke= { setChangeNumPoke } />
          </div>
        {/* galeria */}
      <Galery numPoke={numPoke} />
      <button onClick={ () => setShow( !show )} >show{ JSON.stringify( show ) }</button>
      
      </>
)
}
