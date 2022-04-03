import { useEffect, useState } from "react";
import { Pokemon } from "../Types/PokemonType";
import axios from "axios";
import { getPokemonNameNumberArray } from "../Services/PokeApi";

function useGetPokemonNameNumber(CurrentPage: number, PokemonsPerPage: number) {
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
        setTimeout(() => {
          setPokemons(getPokemonNameNumberArray(res.data));
          setLoader(false);
        }, 1000);
      })
      .catch(() => setError(true));
  }, []);

  return { pokemons, loader, error };
}

export default useGetPokemonNameNumber;
