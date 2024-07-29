import { useReducer } from "react"
import { calcReducer } from "./calcReducer"

export const FormHookAvanzado = () => {
    const [boxCalc, dispatch] = useReducer(calcReducer, "")
    

    return {
        boxCalc,
        dispatch
    }

}
