import React, { useState } from 'react'

export const useForm = ( initialValue = {} ) => {

    // {
    //     username: "",
    //     password: ""
    // }
    const [formState, setFormState] = useState( initialValue )

    const changeFormState = (event) => {
        
        let name = event.target.name 
        let value = event.target.value
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    return {
        formState,
        changeFormState,
    }

}
