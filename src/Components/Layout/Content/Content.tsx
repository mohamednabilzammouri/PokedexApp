import React from "react";
import useGetPokemonNameNumber from "../../../Hooks/useGetPokemonNameNumber";
import Loader from "../../Loader/Loader";
import PokemonCards from "../../Pokemon/PokemonCardsList/PokemonCards";

function Content() {
  const { pokemons, loader, error } = useGetPokemonNameNumber(1, 20);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        pokemons && <PokemonCards DisplayedPokemons={pokemons} />
      )}
      ;
    </>
  );
}

export default Content;
