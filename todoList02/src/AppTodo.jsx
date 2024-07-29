import React, { useContext, useEffect, useState } from 'react'
import { TodoAdd } from './TodoComponents/formTodo/TodoAdd'
import { TodoList } from './TodoComponents/Todos/TodoList'
import { useTodo } from './hooks/useTodo'
import { TodoProvider } from './context/TodoProvider'
import { TodoContext } from './context/TodoContext'

export const AppTodo = () => {


    // const { todos, handleAddTodo, handleDeleteTodo } = useTodo()

    return (
        <TodoProvider>
            {/* Titulo */}
            <h1 className='title-app'>Lista TODO</h1>
            {/* Formulario */}
            <TodoAdd  />
            {/* Show List */}
            <TodoList />
        </TodoProvider>
  )
}
