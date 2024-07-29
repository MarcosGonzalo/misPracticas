import React, { useEffect, useState } from 'react'
// import { useTablero } from './useTablero'

const jugadores = ["X", "O"]

export const useMichi = () => {

    const [turno, setTurno] = useState( jugadores[1] )
    const [ganador, setGanador] = useState( false )
    const [tablero, setTablero] = useState([
        ["","",""],
        ["","",""],
        ["","",""]
    ])


    useEffect(() => {
        if (!ganador) {
            handleChangeTurno();
        }
    }, [ tablero ])
    

    const marcarCasilla = (fila, posicion, tag) => {
        if (tablero[fila][posicion] !== "") return

        let newTablero =  [ ...tablero ]
        newTablero[fila][posicion] = tag

        setTablero(newTablero)
    }

    const handleChangeCasilla = (fila, posicion, tag) => {
        if (tablero[fila][posicion] !== "") return
        if (ganador) return


        marcarCasilla(fila, posicion, tag)
        winRow()
        winColumn()
        winAspa()
    }

    const winRow = () => {

        tablero.forEach( row => {
            let items = new Set( row )
            
            if (items.size === 1 && [...items][0] !== "") {
                setGanador(true)
                return
            } 
        } )
    }

    const winColumn = () => {

        
        let column1 = new Set([
            tablero[0][0],
            tablero[1][0],
            tablero[2][0]
        ])
        
        let column2 = new Set([
            tablero[0][1],
            tablero[1][1],
            tablero[2][1]
        ])

        let column3 = new Set([
            tablero[0][2],
            tablero[1][2],
            tablero[2][2]
        ])

        let columnWin1 = column1.size === 1 && [ ...column1 ][0] !== "" 
        let columnWin2 = column2.size === 1 && [ ...column2 ][0] !== "" 
        let columnWin3 = column3.size === 1 && [ ...column3 ][0] !== "" 

        let isWin =  columnWin1 || columnWin2 || columnWin3 

        if ( isWin ) {
            setGanador(true)
            return
        }
    }

    const winAspa = () => {
        let diagonal1 = new Set([
            tablero[0][0],
            tablero[1][1],
            tablero[2][2]
        ])
        
        let diagonal2 = new Set([
            tablero[0][2],
            tablero[1][1],
            tablero[2][0]
        ])

        let diagonalWin1 = diagonal1.size === 1 && [ ...diagonal1 ][0] !== "" 
        let diagonalWin2 = diagonal2.size === 1 && [...diagonal2][0] !== "" 
        
        if (diagonalWin1 || diagonalWin2) {
            setGanador(true)
        }

    }

    const handleChangeTurno = ( ) => {
        if ( turno === "X" ) {
            setTurno(jugadores[1])
            return
        }

        setTurno(jugadores[0])
        return
    }

    return {
        tablero,
        marcarCasilla,
        winRow,
        turno,
        handleChangeTurno,
        ganador,
        handleChangeCasilla
    }

}
