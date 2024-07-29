import React from 'react'
import { MichiContext } from './MichiContext'
import { useMichi } from '../hooks/useMichi'

export const MichiProvider = ({ children }) => {

    const { turno, tablero, marcarCasilla, winRow, handleChangeTurno, ganador, handleChangeCasilla } = useMichi()

    const funciones = useMichi()
    console.log(funciones)
    console.log("FUNCIONES: ", {...funciones})
    
  return (
    <MichiContext.Provider value={ funciones }>
        { children }      
    </MichiContext.Provider>
  )
}
