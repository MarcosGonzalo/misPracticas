
import { heroes } from "../data/heores"

export const getHeroByName = ( name = "" ) => {

    name = name.trim().toLocaleLowerCase()

    if (name.length === 0) return []
    
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes( name ))

}
