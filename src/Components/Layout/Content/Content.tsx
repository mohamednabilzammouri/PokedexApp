import React, { useContext } from "react";
import { MyPoKemonContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";
import PaginationComponent from "../../Pagination/Pagination";
import PokemonCards from "../../Pokemon/PokemonCardsList/PokemonCards";
import { ContentContainer } from "./ContentStyle";

function Content() {
  const { Mypokemons, loader } = useContext(MyPoKemonContext);
  console.log("Context", Mypokemons);

  return (
    <ContentContainer>
      {loader ? (
        <Loader />
      ) : (
        Mypokemons && <PokemonCards DisplayedPokemons={Mypokemons} />
      )}
      <PaginationComponent />;
    </ContentContainer>
  );
}

export default Content;
