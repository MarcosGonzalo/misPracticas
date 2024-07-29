import React, { useEffect, useState } from 'react'

export const BtnEdit = ({ todos, todo, setTodos, inputEdit, newValue }) => {
  const [isEdit, setIsEdit] = useState( false )

  const onEdit = () => {
    setIsEdit( !isEdit )
    inputEdit.current.classList.toggle("enabled")
    
    if (isEdit) {
      inputEdit.current.blur()
      
      const arrTodos = [...todos]
      const indice = arrTodos.indexOf( todo )
      arrTodos[indice] = newValue
      
      setTodos(arrTodos)
    }
    else {
      inputEdit.current.focus()
    }
  }

  return (
    <button onClick={onEdit} >{ isEdit ? "Aceptar" : "Editar" }</button>
  )
}
