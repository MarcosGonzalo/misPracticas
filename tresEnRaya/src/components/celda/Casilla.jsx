import { useContext, useEffect } from "react"
import "./Casilla.css"
import { MichiContext } from "../../context/MichiContext"

const tag = {
  "X": <i className="fas fa-times"> </i>,
  "O": <i className="far fa-circle"></i>  

}

export const Casilla = ({ fila, posicion /*, marcarCasilla, tablero, turno, handleChangeCasilla*/ }) => {


  const { turno, tablero, marcarCasilla, handleChangeCasilla } = useContext( MichiContext )

  let itemShow = tag[tablero[fila][posicion]]
  
  const handleChangeBox = () => {
    //Si la casilla ya esta ocupada que no la cambie
    if (tablero[fila][posicion] !== "") return
    
    
    marcarCasilla(fila, posicion, turno )
  }

  return (
    <div
      className="casilla"
      onClick={ () => handleChangeCasilla( fila, posicion, turno ) }
    
    >
      {
        itemShow
      }
    </div>
  )
}
