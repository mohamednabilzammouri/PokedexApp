import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PokeCard } from "./PokemonCardStyle";
import { Pokemon } from "../../../Types/PokemonType";
import UnknowPokemon from "../../../unknowPokemon.png";

interface PokemonCardProps {
  MyPokemon: Pokemon;
}

export default function PokemonCard({ MyPokemon }: PokemonCardProps) {
  const { name, number } = MyPokemon;
  return (
    <PokeCard>
      <CardActionArea>
        <CardMedia component="img" image={UnknowPokemon} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Number: {number}
          </Typography>
        </CardContent>
      </CardActionArea>
    </PokeCard>
  );
}
