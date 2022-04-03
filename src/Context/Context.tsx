import { createContext, useEffect, useState } from "react";
import { PokemonsPerPage } from "../Constants/PokemonsPerPage";
import useGetPokemonNameNumber from "../Hooks/useGetPokemonNameNumber";
import { Pokemon } from "../Types/PokemonType";
interface MyPokemonContextInit {
  Mypokemons?: Pokemon[];
  loader?: boolean;
  numberOfPokemons?: number;
  setCurrentPage?: any;
}
export const MyPoKemonContext = createContext<MyPokemonContextInit>({});

export function MyPoKemonContextProvider({ children }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemons, loader, numberOfPokemons } = useGetPokemonNameNumber(
    currentPage,
    PokemonsPerPage
  );
  const [Mypokemons, setMyPokemons] = useState<Pokemon[] | undefined>([]);
  useEffect(() => {
    setMyPokemons(pokemons);
    console.log("page", currentPage);
    console.log("pk", pokemons);
  }, [pokemons, currentPage, setCurrentPage]);

  return (
    <MyPoKemonContext.Provider
      value={{ Mypokemons, loader, numberOfPokemons, setCurrentPage }}
    >
      {children}
    </MyPoKemonContext.Provider>
  );
}
