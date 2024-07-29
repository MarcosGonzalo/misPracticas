import { calcular } from "../helpers/calcular"
import "./Button.css"

export const Button = ({
  idKey,
  showItem,
  isResaltar = false,
  handleClick

}) => {

  return (
    <div
      className={`button ${isResaltar ? "btn-resaltado" : ""}`}
      onClick={
        () => handleClick( idKey )
      }
    >{ showItem }</div>
  )
}

        
// idKey == "="
// ? onCalc
// : idKey == "Borrar"
//   ? borrarTexto
//   : onWriteButton