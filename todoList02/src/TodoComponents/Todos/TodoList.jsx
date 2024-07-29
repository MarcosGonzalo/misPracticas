import React, { useContext } from 'react'
import { TodoItem } from './TodoItem'
import { TodoContext } from '../../context/TodoContext'

export const TodoList = () => {


  const { todos } = useContext(TodoContext)
  
  return (
      <>
      <ul>
        {
          todos.map(todo => (
            <TodoItem key={ todo.id } todo={ todo }  />   
          ))
        }
        </ul>
      </>
)
}
