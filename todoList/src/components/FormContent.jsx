import React, { useEffect, useRef, useState } from 'react'
import { Input } from './Input'
import "./FormContent.css"
import { ListTodo } from './ListTodo'

export const FormContent = () => {
  const [todos, setTodos] = useState([])

  const onChangeTodo = ( newTodo ) => {
    setTodos( valueAnterior => [ newTodo, ...valueAnterior ] );
  }

  const form = useRef(null)

  useEffect(() => {
    const handleSubmit = ( e ) => e.preventDefault()
    if (form.current) {
      form.current.addEventListener("submit", handleSubmit )
    }
    return () => {
      if (form.current) {
        form.current.removeEventListener("submit", handleSubmit);
      }
    }
  }, [ form ])

  // console.log(todos)
  

  return (
      <form ref={ form } className='form-todo' >
        {/* Input form */}
        <Input onChangeTodo = { onChangeTodo } />

        {/* list todo */}
        <ListTodo todos = { todos } setTodos = { setTodos }/>
    </form>
)
}
