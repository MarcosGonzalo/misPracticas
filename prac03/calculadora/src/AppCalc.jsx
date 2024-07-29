import { useEffect, useReducer, useState } from "react"
import "./AppCalc.css"
import { Button } from "./calc/components/Button"
import { InputText } from "./calc/components/InputText"
import { useForm } from "./calc/helpers/useForm"
import { calcReducer } from "./calc/helpers/calcReducer"
import { FormHookAvanzado } from "./calc/helpers/FormHookAvanzado"

export const AppCalc = () => {

    
    // const { boxCalc, onChangeForm, setTextForm } = useForm({
    //     "boxCalc": ""
    // })
    
    // const [state, dispatch] = useReducer(calcReducer, boxCalc )

    const {boxCalc, dispatch } = FormHookAvanzado()

    const handleWrite = (itemText) => {
        console.log(itemText)
        dispatch({
            type: itemText,
            nameBox: "boxCalc",
            value: boxCalc
        })
    }

    // const handleClick = (itemText) => {
    //     console.log(itemText)
    //     dispatch({
    //         type: itemText,
    //         changeText: setTextForm,
    //         nameBox: "boxCalc",
    //         value: boxCalc
    //     })
    // }

    // useEffect(() => {
    //     setTextForm( "boxCalc", state)
    // }, [ state ])
    

    const buttons = [
        
        "Borrar", "(", ")", "=",
        "1", "2", "3", "/",
        "4", "5", "6", "*",
        "7", "8", "9", "-",
        "0", ".", "", "+",
    ]

    const iconBtn = {
        "Borrar": <i className="fas fa-backspace"></i>,
        "*": <i className="fas fa-times"></i>
    }

    const itemsResaltar = ["="]



    

    return (
        <div className='calc'>
            {/* Input */}
            <div className="content-input">
                <InputText
                    textBox={boxCalc}
                    onWriteForm={ handleWrite }
                    // onChangeForm={onChangeForm}
                    // changeText={ handleClick }
                />
            </div>
    
            {/* Botnos */}
            <div className="content-button">
                {
                    buttons.map( item => (
                        <Button
                            key={ item }
                            idKey= { item }
                            
                            showItem={
                                item in iconBtn
                                    ? iconBtn[item] 
                                    : item
                            }
                            
                            isResaltar={
                            itemsResaltar.includes(item)
                                ? true
                                : false
                            
                            }
                            // setTextForm={ setTextForm }
                            // textValue= { boxCalc }
                            nameBox = { "boxCalc" }
                            // handleClick={ handleClick }
                            handleClick={ handleWrite }
                        />
                    ) )
                }
            </div>
        </div>
    )
}




    //La presentacion de la chirnanat plat que es que ofre, hablaresmos del team LP, y de 
    // Alexander Huarcaya -> Huarseral

    //desgian 450
    
    