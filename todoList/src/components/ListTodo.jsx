import { BtnDelete } from "./BtnDelete"
import { BtnEdit } from "./BtnEdit"
import "./ListTodo.css"
import { Todo } from "./Todo"

export const ListTodo = ({ todos, setTodos }) => {
  return (
      <ul className="list-todo">
          {
              todos.map(( todo ) => (
                <Todo key={ todo } todos={ todos } todo={ todo } setTodos={ setTodos } />
              ))
          }
    </ul>
  )
}
