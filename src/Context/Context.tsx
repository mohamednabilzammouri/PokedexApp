import { createContext, useEffect, useState } from "react";
import { PokemonsPerPage } from "../Constants/PokemonsPerPage";
import useGetPokemonNameNumberFromApi from "../Hooks/useGetPokemonNameNumberFromApi";
import { Pokemon } from "../Types/PokemonType";
interface MyPokemonContextInit {
  Mypokemons?: Pokemon[];
  loader?: boolean;
}
export const MyPoKemonContext = createContext<MyPokemonContextInit>({});

export function MyPoKemonContextProvider({ children }: any) {
  const { pokemons, loader } = useGetPokemonNameNumberFromApi(
    1,
    PokemonsPerPage
  );
  const [Mypokemons, setMyPokemons] = useState<Pokemon[] | undefined>([]);
  useEffect(() => {
    setMyPokemons(pokemons);
  }, [pokemons]);

  return (
    <MyPoKemonContext.Provider value={{ Mypokemons, loader }}>
      {children}
    </MyPoKemonContext.Provider>
  );
}
