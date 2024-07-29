import { useContext } from "react"
import { Casilla } from "../celda/Casilla"
import "./Tablero.css"
import { MichiContext } from "../../context/MichiContext"

export const Tablero = () => {

  const { tablero } = useContext( MichiContext )

  return (
    <div className="tablero">
      {
        tablero.map(( row, numRow ) => (
          
          row.map(( item, posicion ) => <Casilla
            fila={ numRow }
            posicion={ posicion }
          />

        )))
      }
    </div>
  )
}
