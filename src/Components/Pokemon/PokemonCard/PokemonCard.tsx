import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PokeCard } from "./PokemonCardStyle";
import { Pokemon } from "../../../Types/PokemonType";
import UnknowPokemon from "../../../unknowPokemon.png";
import PrefetchDataHover from "../../../Hooks/usePrefetchDataHover";
import loading from "../../../simple_pokeball.gif";
import { getPokemonImage } from "../../../Services/PokeApi";
interface PokemonCardProps {
  MyPokemon: Pokemon;
}

export default function PokemonCard({ MyPokemon }: PokemonCardProps) {
  const { name, number } = MyPokemon;
  const [image, setImage] = useState<string>(UnknowPokemon);
  const handleHover = () => {
    setImage(loading);
    PrefetchDataHover(name).then((res) => {
      console.log(getPokemonImage(res.data));
      if (getPokemonImage(res.data)) setImage(getPokemonImage(res.data));
      else setImage(UnknowPokemon);
    });
  };
  return (
    <PokeCard onMouseEnter={handleHover}>
      <CardActionArea>
        <CardMedia component="img" image={image} />
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
