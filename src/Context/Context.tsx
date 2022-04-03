import { createContext, useEffect, useState } from "react";
import { PokemonsPerPage } from "../Constants/PokemonsPerPage";
import useGetPokemonNameNumber from "../Hooks/useGetPokemonNameNumber";
import { Pokemon } from "../Types/PokemonType";
interface MyPokemonContextInit {
  Mypokemons?: Pokemon[];
  loader?: boolean;
}
export const MyPoKemonContext = createContext<MyPokemonContextInit>({});

export function MyPoKemonContextProvider({ children }: any) {
  const { pokemons, loader } = useGetPokemonNameNumber(1, PokemonsPerPage);
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
