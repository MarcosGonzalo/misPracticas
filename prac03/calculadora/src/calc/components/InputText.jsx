import { useEffect, useState } from "react"
import { useForm } from "../helpers/useForm"
import "./InputText.css"
import { calcular } from "../helpers/calcular"

export const InputText = ({ textBox, onWriteForm }) => {

  const onChangeForm = (e) => {
    const value = e.nativeEvent.data
    const istrue = /[A-Za-z]+/g.test(value); 
    console.log("elemento: ", e )
    console.log("Lo que necesito: ", value )
    
    if ( istrue )  return 

    onWriteForm( value )
  }

  
  
  return (
        <input
          className='input-text'
          type="text"
          placeholder="Ingrese el numero..."
          name="boxCalc"
          value={textBox}  
          onChange={onChangeForm}
          autoFocus={ true }
        />
  )
}
