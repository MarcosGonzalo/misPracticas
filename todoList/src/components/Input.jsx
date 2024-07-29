import { useState } from "react"
import "./Input.css"

export const Input = ({ onChangeTodo }) => {
    const [value, setValue] = useState("")

    const sendTodo = () => {
        onChangeTodo(value)
        setValue("")
    }

  return (
      <>
          <input
              className="input-todo"
              type="text"
              placeholder='Add your todo'
              onChange={
                  event => setValue( event.target.value )
              }
              value={ value }
          />
          <button
              className="btn-add-todo"
              onClick={ () => sendTodo() }
          >Add</button>
      </>
)
}
