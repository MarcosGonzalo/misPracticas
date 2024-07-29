import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("Me volvi a dibujar pipip")
  return (
      <>
          <button
              className='btn btn-primary'
            onClick={ increment } 
          > Increment </button>

      </>
)
})
