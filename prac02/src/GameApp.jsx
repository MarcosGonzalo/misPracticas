import React, { useEffect, useState } from 'react'
import { Title } from './components/Title'
import { Tablero } from './components/Tablero'
import { Winner } from './components/Winner'

export const GameApp = () => {

    const [table, setTable] = useState([
        ["","",""],
        ["","",""],
        ["","",""]
    ])

  const [jugador, setJugador] = useState( true )
  const [ganador, setGanador] = useState( false )

  useEffect(() => {
    table.forEach(row => {
      console.log("UseEffect ->: ",  winRow(row) )
      let quienGano = winRow(row)
      if (quienGano) {
        console.log("YA hay un ganaodr")
        setGanador(true)
        setJugador( !jugador )
      }
      // else console.log("Esta fila no gano")
    })

    console.log(winX(table))
    if (winX(table)) {
      console.log("!!!Ganador!!!")
      setGanador(true)
      setJugador( !jugador )
    }

    if (winVertical( table )) {
      console.log("***Ganador***")
      setGanador(true)
      setJugador( !jugador )
    }
  }, [ table ])
  

    const handleChangeTable = (fila, posicion) => {
        let arrTemp = [...table]
        arrTemp[fila][posicion] = jugador ? "X" : "O" 
        setTable( arrTemp )
    }
  
  const winRow = ( arr ) => {
    let etiqueta = new Set(arr)
    // console.log(etiqueta.size === 1 && [...etiqueta][0] !== ""  )
    if (etiqueta.size === 1 && [...etiqueta][0] !== "") return [...etiqueta]
    return false 
  }

  const winX = (arr) => {
    let diagonal1 = new Set()
    let diagonal2 = new Set()
    diagonal1.add(arr[0][0])
    diagonal1.add(arr[1][1])
    diagonal1.add(arr[2][2])

    diagonal2.add(arr[0][2])
    diagonal2.add(arr[1][1])
    diagonal2.add(arr[2][0])

    if (diagonal1.size === 1 && [...diagonal1][0] !== "") {
      return true 
    } else if (diagonal2.size === 1 && [...diagonal2][0] !== "") {
      return true
    } else {return false}

    
  }

  const winVertical = (arr) => { 
    let vet1 = new Set()
    let vet2 = new Set()
    let vet3 = new Set()

    vet1.add(arr[0][0])
    vet1.add(arr[1][0])
    vet1.add(arr[2][0])

    vet2.add(arr[0][1])
    vet2.add(arr[1][1])
    vet2.add(arr[2][1])

    vet3.add(arr[0][2])
    vet3.add(arr[1][2])
    vet3.add(arr[2][2])

    if (vet1.size === 1 && [...vet1][0] !== "") {
      return true
    } else if ((vet2.size === 1 && [...vet2][0] !== "")) {
      return true 
    } else if (vet3.size === 1 && [...vet3][0] !== "") {
      return true 
    } else return false
  }

  return (
    <>
          {/* Show Name */}
          <Title jugador={ jugador } />
          <div className='zona-game'>
            {/* Show Tablero */}
              <Tablero onChangePlayer={setJugador} items={table} jugador={jugador} onChangeTable={ handleChangeTable } ganador={ ganador } />
            
            {/* Show Ganador */}
        <Winner ganador={ganador} jugador={ jugador } />
          </div>
    </>
)
}
