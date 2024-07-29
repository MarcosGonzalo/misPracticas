
export const calcular = ( valueText ) => {
    let result = ""
   try {
    result = eval( valueText )
    return result 
   } catch (error) {
    console.log("xd mano esta erroneo")
   } 
}
