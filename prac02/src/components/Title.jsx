import React from 'react'

export const Title = ({ jugador }) => {
  return (
      <h1 className='titulo'>Jugador <small>{ jugador ? "X": "O" }</small></h1>
)
}
