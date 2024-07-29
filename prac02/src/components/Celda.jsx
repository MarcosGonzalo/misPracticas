import { useState } from "react"
import "./Celda.css"

export const Celda = ({ onChangePlayer, jugador, row, position, onChangeTable }) => {

    
    const [item, setItem] = useState("")
    
    const handleChangePlayer = () => {
        // item = jugador ? <i class="fas fa-times"></i> : <i className="far fa-circle"></i>

        setItem(jugador ? <i className="fas fa-times"></i> : <i className="far fa-circle"></i> )

        onChangePlayer(player => !player)
        // console.log(item)
        // console.log("Row: ", row, "Position: ", position)
        onChangeTable( row, position)
    }

  return (
    <div
          className='celda'
          onClick={ handleChangePlayer }
    >
       { item }
    </div>
)
}
