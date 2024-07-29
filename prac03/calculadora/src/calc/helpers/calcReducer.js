import { calcular } from "./calcular";

export const calcReducer = (initialValue = "", action) => {

    switch (action.type) {
        case "=":{
            let newValue = calcular(initialValue)
            return newValue
        }
            
        case "Borrar": { 
            console.log( initialValue )
            let newValue = initialValue.toString().slice(0, -1)
            return newValue
        }
            
        default: 
        console.log("useReducer: ", initialValue )
        let newValue = initialValue + action.type
        return newValue
    }

}

    
/*
   switch ( action.type ) {
        case "=":{
            console.log("Play Btn '='")
            console.log("El valor de la accion es: ", action.value )
            let newValue = calcular( action.value )
            action.changeText( action.nameBox, newValue )
            break;
        }
        case "Borrar":{ 
            console.log("Play Btn '<=[X]'")
            let newValue = action.value.toString().slice(0, -1)
            action.changeText( action.nameBox, newValue )
            break;
        }
            default: 
            console.log("Por dafult any btn")
            action.changeText( action.nameBox, action.value + action.type )
            
    }

*/ 