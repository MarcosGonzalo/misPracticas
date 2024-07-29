import { useContext } from "react"
import "./Jugador.css"
import { MichiContext } from "../../context/MichiContext"

export const Jugador = ({ turnoJugador = "X" }) => {
  
  const { turno } = useContext( MichiContext )

  return (
      <h3 className="turno-jugador">Turno del Jugador <span>{ turno }</span></h3>
  )
}
