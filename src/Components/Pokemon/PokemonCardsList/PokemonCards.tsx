import React from "react";
import { Pokemon } from "../../../Types/PokemonType";
import PokemonCard from "../PokemonCard/PokemonCard";
import { StyledPokeCards } from "./PokemonCardsStyle";

interface PokemonCardsProps {
  DisplayedPokemons: Pokemon[];
}

function PokemonCards({ DisplayedPokemons }: PokemonCardsProps): JSX.Element {
  return (
    <StyledPokeCards>
      {DisplayedPokemons.map(({ name, number, image }) => (
        <PokemonCard
          key={number}
          MyPokemon={{ name: name, number: number, image: image }}
        />
      ))}
    </StyledPokeCards>
  );
}

export default PokemonCards;
