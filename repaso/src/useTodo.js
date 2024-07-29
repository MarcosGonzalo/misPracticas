import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'


const initialState = [
    {
        id: new Date().getTime(),
        description: "Recolectar la piedra 1",
        done: false
    },

    {
        id: new Date().getTime() * 3,
        description: "Recolectar la piedra 2",
        done: false
    }
]

const init = () => {
    let datalocal = JSON.parse(localStorage.getItem('todos')) || []
    return datalocal
}

export const useTodo = () => {
  
    const [todos, dispatch] = useReducer( todoReducer, initialState, init  )
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ])
    
    
    const handleNewTodo = ( todo ) => {

        const action = {
            type: "[TODO] Add todo",
            payload: todo 
        }

        dispatch( action )
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: "[TODO] Delete todo",
            payload: id
        }

        dispatch( action ) 
    }

    const handleToggleTodo = (id) => { 
        const action = {
            type: "[TODO] Toggle todo",
            payload: id
        }

        dispatch( action ) 
    }

    


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length
    }
  
}
