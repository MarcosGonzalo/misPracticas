import React from 'react'
import { useForm } from './useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { descripcion, onInputChange, onResetForm } = useForm({
        descripcion: ""
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault()

        if (descripcion.length <= 1) return
        
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: descripcion
        }

        onNewTodo(newTodo)
        onResetForm()
    }

  return (
    <form onSubmit={ onFormSubmit }>
        <input
            type="text"
            placeholder='¿Qué hay que hacer?'
              className='form-control'
              name='descripcion'
              value={descripcion}
              onChange={ onInputChange }
        />      
        <button type='submit' className='btn btn-outline-primary mt-2'>Agregar TODO</button>
    </form>
  )
}
