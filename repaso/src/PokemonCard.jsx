import React from 'react'

export const PokemonCard = ({ id, name, sprites }) => {
    // console.log(sprites instanceof Array())
    console.log(sprites)
    console.log(Object.keys(sprites))
    return (
        <section>
            <h2>#{id} - {name}</h2>  
            
            <div>
                {Object.keys(sprites).map(spriteUrl => {
                    console.log("sprpites ---->", spriteUrl, sprites[spriteUrl])
                   return <img key={ sprites[spriteUrl] } src={ sprites[spriteUrl] } alt="" />
                })}
                {/* <img src={ sprites.front_default } alt="" /> */}
            </div>
        </section>    
    )

}
