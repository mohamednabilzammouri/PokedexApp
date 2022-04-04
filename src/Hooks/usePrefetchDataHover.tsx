import axios from "axios";
import { PokeApiUrl } from "../Constants/PokemonsPerPage";
import {
  checkForAdditionalData,
  getItemFromLocalStorage,
  mutatePokemonLocalStorage,
} from "../Services/LocalStorage";
import { getPokemonImage } from "../Services/PokeApi";
import { Pokemon } from "../Types/PokemonType";

function prefetchDataHover(pokemonName: string, pageNumber: number) {
  if (!checkForAdditionalData(pokemonName, pageNumber)) {
    axios.get(`${PokeApiUrl}/${pokemonName}`).then((res: any) => {
      mutatePokemonLocalStorage(
        pokemonName,
        pageNumber,
        getPokemonImage(res.data)
      );
      return getPokemonImage(res.data);
    });
  }
  return getItemFromLocalStorage(pageNumber.toString()).find(
    (pokemon: Pokemon) => pokemon.name === pokemonName
  ).image;
}
export default prefetchDataHover;
