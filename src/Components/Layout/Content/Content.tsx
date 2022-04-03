import React, { useContext } from "react";
import { MyPoKemonContext } from "../../../Context/Context";
import useGetPokemonNameNumberFromApi from "../../../Hooks/useGetPokemonNameNumberFromApi";
import Loader from "../../Loader/Loader";
import PokemonCards from "../../Pokemon/PokemonCardsList/PokemonCards";

function Content() {
  //   const { pokemons, loader, error } = useGetPokemonNameNumberFromApi(1, 20);
  const { Mypokemons, loader } = useContext(MyPoKemonContext);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        Mypokemons && <PokemonCards DisplayedPokemons={Mypokemons} />
      )}
      ;
    </>
  );
}

export default Content;
