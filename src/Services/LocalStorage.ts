import { Pokemon } from "../Types/PokemonType"

export const checkIfExistInLocalStorage = (key:string):boolean => {
    if (localStorage.getItem(key)) return true
    return false
}

export const getItemFromLocalStorage = (key:string)=>{
    return JSON.parse(localStorage.getItem(key) || "empty")
}

export const setItemToLocalStorage = (key:string ,value:string):void =>{
    localStorage.setItem(key, value);
}

export const  mutatePokemonLocalStorage = (pokemonName:string, pageNumber:number) =>{

let Pokemons:Pokemon[] = getItemFromLocalStorage(pageNumber.toString())
let Mypokemon:Pokemon|undefined = Pokemons.find((pokemon:Pokemon)=>pokemon.name===pokemonName)
if(Mypokemon)  Mypokemon.image = "aaa" ;
console.log(Mypokemon)

setItemToLocalStorage(pageNumber.toString(),JSON.stringify(Pokemons))

}