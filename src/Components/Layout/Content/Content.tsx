import React, { useContext } from "react";
import { MyPoKemonContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";
import PaginationComponent from "../../Pagination/Pagination";
import PokemonCards from "../../Pokemon/PokemonCardsList/PokemonCards";

function Content() {
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
