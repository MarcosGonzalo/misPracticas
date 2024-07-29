import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialTodo = [

]

const funInit = () => {
    const data = localStorage.getItem('todos') 
    return JSON.parse(data)
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialTodo, funInit)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)) 
        
    }, [ todos ])
    
    const handleAddTodo = ( todo ) => {
        console.log("Este es le nuevo todo: ", todo)

        let action = {
            type: "add todo",
            payload: todo
        }

        dispatch( action )
    }

    const handleDeleteTodo = ( idTodo ) => { 
        let action = {
            type: "delete todo",
            payload: idTodo
        }
        console.log("Despachamos...")
        dispatch( action )
    }

    const handleEditTodo = ( todo ) => { 
        let action = {
            type: "update todo",
            payload: todo,
        }

        dispatch( action )
    }

    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo
    }
}
