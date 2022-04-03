import React from "react";
import { Pokemon } from "../../../Types/PokemonType";
import PaginationComponent from "../../Pagination/Pagination";
import PokemonCard from "../PokemonCard/PokemonCard";
import { StyledPokeCards } from "./PokemonCardsStyle";

interface PokemonCardsProps {
  DisplayedPokemons: Pokemon[];
}

function PokemonCards({ DisplayedPokemons }: PokemonCardsProps): JSX.Element {
  return (
    <StyledPokeCards>
      {DisplayedPokemons.map(({ name, number }) => (
        <PokemonCard key={number} MyPokemon={{ name: name, number: number }} />
      ))}
      <PaginationComponent />
    </StyledPokeCards>
  );
}

export default PokemonCards;
