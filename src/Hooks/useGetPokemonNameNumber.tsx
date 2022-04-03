import { useEffect, useState } from "react";
import { Pokemon } from "../Types/PokemonType";
import axios from "axios";
import {
  getPokemonCount,
  getPokemonNameNumberArray,
} from "../Services/PokeApi";
import {
  checkIfExistInLocalStorage,
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../Services/LocalStorage";
import { PokeApiUrl } from "../Constants/PokemonsPerPage";

function useGetPokemonNameNumberFromApi(
  CurrentPage: number,
  PokemonsPerPage: number
) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [numberOfPokemons, setNumberOfPokemons] = useState<number>();
  const offset = (CurrentPage - 1) * PokemonsPerPage;

  useEffect(() => {
    if (!checkIfExistInLocalStorage(CurrentPage.toString())) {
      axios
        .get(`${PokeApiUrl}?offset=${offset}&limit=${PokemonsPerPage}`)
        .then((res: any) => {
          const PokemonArray: Pokemon[] = getPokemonNameNumberArray(res.data);
          const PokemonCount: number = getPokemonCount(res.data);
          setPokemons(PokemonArray);
          setNumberOfPokemons(PokemonCount);
          setItemToLocalStorage("count", JSON.stringify(PokemonCount));
          setItemToLocalStorage(
            CurrentPage.toString(),
            JSON.stringify(PokemonArray)
          );

          setLoader(false);
        })
        .catch(() => setError(true));
    } else {
      setPokemons(getItemFromLocalStorage(CurrentPage.toString()));
      setNumberOfPokemons(parseInt(getItemFromLocalStorage("count")));

      setLoader(false);
    }
  }, [CurrentPage]);

  return { pokemons, loader, error, numberOfPokemons };
}

export default useGetPokemonNameNumberFromApi;
