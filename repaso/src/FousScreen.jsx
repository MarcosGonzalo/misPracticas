import React, { useRef } from 'react'

export const FousScreen = () => {

  const inpuRef = useRef();
  const onClick = () => {
    inpuRef.current.select()    
  }

  return (
      <>
        <h1>Focus Screen</h1>
          <hr />

      <input
        
          type="text"
          placeholder='Ingrese losxd '
          className='form-control'

        />

      <input
          ref={ inpuRef }
          type="text"
          placeholder='Ingrese los componentes'
          className='form-control'

        />
      
      <button className='btn btn-primary mt-2' onClick={ onClick }>set focus</button>
      </>
)
}
