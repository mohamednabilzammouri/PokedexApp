import { useEffect, useState } from "react";
import { Pokemon } from "../Types/PokemonType";
import axios from "axios";
import { getPokemonNameNumberArray } from "../Services/PokeApi";

function useGetPokemonNameNumberFromApi(
  CurrentPage: number,
  PokemonsPerPage: number
) {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const offset = (CurrentPage - 1) * PokemonsPerPage;

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PokemonsPerPage}`
      )
      .then((res: any) => {
        setPokemons(getPokemonNameNumberArray(res.data));
        setLoader(false);
      })
      .catch(() => setError(true));
  }, []);

  return { pokemons, loader };
}

export default useGetPokemonNameNumberFromApi;
