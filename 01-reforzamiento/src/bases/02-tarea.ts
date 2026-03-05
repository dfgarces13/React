import heroes from "../data/heroes.data";
import { Hero } from "../data/heroes.data";
import { Owner } from "../data/heroes.data";


export const getHeroesByOwner = (value: Owner) : Hero[]|undefined =>  {
    return heroes.filter(hero => hero.owner === value);
}

