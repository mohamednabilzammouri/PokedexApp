import { Pokemon } from "../Types/PokemonType";



export const getPokemonNameNumberArray = (resData:any):Pokemon[] =>{
    let MyPokemons:Pokemon[] = []
    resData.results?.map((pokemon:any)=>{
        MyPokemons.push({name : pokemon.name, number : getPokemonNumberFromUrl(pokemon.url)})        
    })
    return MyPokemons
}

const getPokemonNumberFromUrl=(url:string)=>{
    return parseInt(url.split("/")[6]);
}