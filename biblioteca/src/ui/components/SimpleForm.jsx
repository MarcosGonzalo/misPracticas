import { useState } from "react"
import "./SimpleForm.css"

export const SimpleForm = ({ changeShowBooks }) => {

    const [formState, setFormState] = useState("")

    const changeFormState = ( event ) => {
        setFormState(event.target.value) 
        changeShowBooks( event.target.value )
    }

    const handleChangeBook = () => {
        changeShowBooks( formState )
    }

  return (
    <div className="simpleForm">
          <input
              type="text"
              placeholder='Search book...'
              value={ formState }
              onChange={ changeFormState }
          />      
    </div>
)
}
