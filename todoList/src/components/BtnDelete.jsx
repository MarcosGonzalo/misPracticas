import React from 'react'

export const BtnDelete = ({ todos, todo, setTodos }) => {
  
  const onClick = () => {
    let newTodos = todos.filter(to => to !== todo)
    setTodos( newTodos )
  }

  return (
    <button onClick={ onClick }>BtnDelete</button>
  )
}
