import axios from "axios";
import { PokeApiUrl } from "../Constants/PokemonsPerPage";

function PrefetchDataHover(pokemonName: string) {
  return axios.get(`${PokeApiUrl}/${pokemonName}`);
}

export default PrefetchDataHover;
