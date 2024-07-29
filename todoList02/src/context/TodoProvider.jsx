import React, { useEffect } from 'react'
import { TodoContext } from './TodoContext'
import { useTodo } from '../hooks/useTodo'

export const TodoProvider = ({ children }) => {
    
    const { todos, handleAddTodo, handleDeleteTodo, handleEditTodo } = useTodo()

   
    

    return (
        <TodoContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo, handleEditTodo }}>
            { children }
        </TodoContext.Provider>
    )
}
