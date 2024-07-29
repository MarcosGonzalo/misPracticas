import React from 'react'

export const todoReducer = ( initialState, action ) => {
    switch (action.type) { 
        case "add todo":
            return [...initialState, action.payload]
        case "delete todo":
            return initialState.filter(todo => todo.id !== action.payload)
        case "update todo":
            return initialState.map(todo => {
                console.log("Esto es de la comparacion", todo.id == action.payload.id )
                if (todo.id == action.payload.id) { 
                    return { 
                        ...todo,
                        descripcion: action.payload.descripcion
                    }
                }

                return todo
            })
        default:
            return initialState
    }

}
