import { useState } from "react"


export const useTablero = () => {
    const [tablero, setTablero] = useState([
        ["","",""],
        ["","",""],
        ["","",""]
    ])


    const marcarCasilla = (fila, posicion, tag) => {
        if( tablero[fila][posicion] !== "") return

        let newTablero =  [ ...tablero ]
        newTablero[fila][posicion] = tag

        setTablero(newTablero)
    }

    const winRow = () => {

        

        tablero.forEach( row => {
            let items = new Set( row )
            
            if ( items.size === 1 && [ ...items ][0] !== "" ) {
                return true
            } 
        } )
    }

    return {
        tablero,
        marcarCasilla,
        winRow,
    }
}
