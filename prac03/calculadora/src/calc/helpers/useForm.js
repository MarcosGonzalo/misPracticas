import { useState } from "react"

export const useForm = ( initial = {} ) => {
    const [formState, setFormState] = useState(initial)
    
    const onChangeForm = (e) => {
        const name = e.target.name 
        const value = e.target.value
        const istrue = /[A-Za-z]+/g.test( value ); 
        
        if ( istrue )  return 

        setFormState({
            ...formState,
            [ name ]: value 
        })
    }
    const setTextForm = (nameBox, newValue) => {
        console.log( nameBox, newValue) 
        setFormState({
            ...formState,
            [ nameBox ]: newValue
        })
    }

    return {
        ...formState,
        formState,
        onChangeForm,
        setTextForm
    }
}
