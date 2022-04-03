import { useEffect, useState } from "react";
import { Pokemon } from "../Types/PokemonType";
import axios from "axios";
import {
  getPokemonCount,
  getPokemonNameNumberArray,
} from "../Services/PokeApi";
import { useLocalStorage } from "./useLocalStorage";

function useGetPokemonNameNumberFromApi(
  CurrentPage: number,
  PokemonsPerPage: number
) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [storedPokemons, setStoredPokemons] = useLocalStorage(
    CurrentPage.toString(),
    pokemons
  );
  const [numberOfPokemons, setNumberOfPokemons] = useState<number>();
  const [storedCount, setStoredCount] = useLocalStorage("count", 0);
  const offset = (CurrentPage - 1) * PokemonsPerPage;

  useEffect(() => {
    if (storedPokemons.length === 0) {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PokemonsPerPage}`
        )
        .then((res: any) => {
          setPokemons(getPokemonNameNumberArray(res.data));
          setStoredPokemons(getPokemonNameNumberArray(res.data));
          setLoader(false);
          if (!storedCount) {
            setNumberOfPokemons(getPokemonCount(res.data));
            setStoredCount(getPokemonCount(res.data));
          }
        })
        .catch(() => setError(true));
    } else {
      setPokemons(storedPokemons);
      setLoader(false);
      setNumberOfPokemons(storedCount);
    }
  }, [storedCount]);

  return { pokemons, loader, error, numberOfPokemons };
}

export default useGetPokemonNameNumberFromApi;
