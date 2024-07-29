import React from 'react'

export const Winner = ({ jugador, ganador}) => {

  console.log("Turno jugador", jugador)
  let etiqueta = ""
  if (ganador) {
     etiqueta = jugador ? "X" : "O" 
  }
  
  return (
      <>
          <div>
        <h2>El ganador es: <span>{ etiqueta }</span></h2>
            <hr />
          </div>
      </>
)
}
