import { Celda } from "./Celda"
import "./Tablero.css"

export const Tablero = ({ items, onChangePlayer, jugador, onChangeTable, ganador }) => {



  return (
      <>
        <div className={`tablero ${ ganador ? "disabled" : ""}`}>
            {
                  items.map((row, i) => (
                    row.map((item, e) => (
                        <Celda onChangePlayer={onChangePlayer} jugador={jugador} row={i} position={e} onChangeTable={onChangeTable} />
                    ))
                ))
              }
        </div>
      </>
)
}
