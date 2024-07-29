import React from 'react'
import { useForm } from './customHook/useForm';

export const Input = ({ setNumPoke }) => {
    const { form, setChange } = useForm("");

    const onPedir = () => {
        setNumPoke( +form )
    }

  return (
      <>
          <input
              className='input'
              type="text"
              onChange={ setChange } 
              value={ form }
              placeholder='Escribe el numero poke'
              
          />
          <button onClick={ () => onPedir() }>Pedir</button>
      </>

)
}
