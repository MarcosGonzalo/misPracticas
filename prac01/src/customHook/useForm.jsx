import React, { useState } from 'react'

export const useForm = ( initialValue ) => {
    const [ form, setForm ] = useState( initialValue )

    const setChange = ({ target }) => {
        console.log(target);
        setForm( target.value )
    }

    return {
        form,
        setChange,
    }

}
