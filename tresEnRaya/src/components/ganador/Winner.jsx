import { useContext } from "react"
import "./Winner.css"
import { MichiContext } from "../../context/MichiContext"

export const Winner = () => {

  const { ganador, turno } = useContext(MichiContext)

  return (
    <div className="content-ganador">
      <p className="winner-title">El Ganador es: </p>
      <hr />
      <p>Jugador <span className="ganador">{ ganador && <span> { turno } </span> }</span> </p>
    </div>
  )
}
