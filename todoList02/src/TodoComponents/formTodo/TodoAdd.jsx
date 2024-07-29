import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"
import { useForm } from "../../hooks/useForm"
import "./TodoAdd.css"

export const TodoAdd = () => {

  const { handleAddTodo } = useContext(TodoContext)

  const { formState, onInputChange, onResetForm } = useForm({
    "inp-todo": ""
  })

  const handleForm = (event) => {
    event.preventDefault()
    
    handleAddTodo({
      id: new Date().getTime(),
      descripcion: formState["inp-todo"]
    })

    onResetForm()
  }

  return (
    <form onSubmit={ handleForm } className="form-todo">
      <input
        className="inp-todo encima"
        type="text"
        name="inp-todo"
        placeholder='Escribe tu TODO aquí...'
        value={ formState["inp-todo"] }
        onChange={ onInputChange }
      />
      <button
        type='submit'
        className="btn-add-todo encima"
      >Add</button>  
    </form>
  )
}
