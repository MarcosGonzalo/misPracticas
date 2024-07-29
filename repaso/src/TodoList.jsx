import React from 'react'
import { TodosItem } from './TodosItem'

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
      <>
        <ul className='list-group'>
            {
                todos.map( todo => (
                    <TodosItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo} />
                ))
            }
        </ul>
      </>
)
}
