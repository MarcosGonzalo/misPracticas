import { useContext, useEffect, useRef, useState } from "react"
import "./TodoItem.css"
import { TodoContext } from "../../context/TodoContext"
import { useForm } from "../../hooks/useForm"


export const TodoItem = ({ todo }) => {

    const [isEdit, setIsEdit] = useState( false )
    const { handleDeleteTodo, handleEditTodo } = useContext(TodoContext)
    const inpEditTodo = useRef(null)
    const { formState, onInputChange, } = useForm({
        inpEditTodo: todo.descripcion
    })

    console.log(isEdit)
    
    const onEditTrue = ( ) => {
        inpEditTodo.current.disabled = false
        inpEditTodo.current.select()
    }

    const onEditFalse = ( ) => {
        inpEditTodo.current.disabled = true
    }

    useEffect(() => {
        if ( isEdit ) {
            console.log("Estoy en true")
            onEditTrue( )
        } else {
            console.log("Estoy en false")
            onEditFalse()
            
            const newTodoEdit = {
                id: todo.id,
                descripcion: formState["inpEditTodo"]
            }
            handleEditTodo( newTodoEdit )

        }
    }, [ isEdit ])
    

    const disabled = ( ) => ""
    return (
    <li className="todo-item">
        <input
            ref={inpEditTodo} 
            name="inpEditTodo"
            type="text"
            className=""
            value={ formState["inpEditTodo"] }
            onChange={ onInputChange }  
            disabled={true}    
        />
        
        <div>
            <button
                className="encima"
                onClick={ event => setIsEdit(!isEdit) }
            >   
                {
                    isEdit
                    ? <i className="fas fa-check"></i> 
                    : <i className="fas fa-pen"></i>
                }
                
            </button>
            <button
                className="encima"
                onClick={ () => handleDeleteTodo( todo.id ) }
            >
                <i className="fas fa-times"></i>
            </button>
        </div>
    </li>   
  )
}
