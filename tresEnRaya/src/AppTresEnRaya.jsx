import React from 'react'
import { Jugador } from './components/turno/Jugador'
import { Tablero } from './components/tablero/Tablero'
import { Winner } from './components/ganador/Winner'
import { useMichi } from './hooks/useMichi'
import { MichiProvider } from './context/MichiProvider'

export const AppTresEnRaya = () => {

  return (
      <MichiProvider>
        {/* Turno del jugador */}
        <Jugador  />

        <div className='zona-juego'>
            {/* Tablero */}
            <Tablero />
            {/* Ganador */}
            <Winner />
        </div>  
      </MichiProvider>
  )
}
