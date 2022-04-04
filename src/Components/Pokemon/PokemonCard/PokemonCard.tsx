import React, { useContext, useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PokeCard } from "./PokemonCardStyle";
import { Pokemon } from "../../../Types/PokemonType";
import { MyPoKemonContext } from "../../../Context/Context";
import UnknowPokemon from "../../../unknowPokemon.png";
import loading from "../../../simple_pokeball.gif";
import {
  checkForAdditionalData,
  mutatePokemonLocalStorage,
} from "../../../Services/LocalStorage";
import { PokeApiUrl } from "../../../Constants/PokemonsPerPage";
import axios from "axios";
import { getPokemonImage } from "../../../Services/PokeApi";

interface PokemonCardProps {
  MyPokemon: Pokemon;
}

export default function PokemonCard({ MyPokemon }: PokemonCardProps) {
  const { name, number, image } = MyPokemon;
  let { currentPage } = useContext(MyPoKemonContext);
  const [cardImage, setCardImage] = useState(UnknowPokemon);

  const handleHover = () => {
    if (!checkForAdditionalData(name, currentPage || 1)) {
      axios.get(`${PokeApiUrl}/${name}`).then((res: any) => {
        mutatePokemonLocalStorage(
          name,
          currentPage || 1,
          getPokemonImage(res.data)
        );
        setCardImage(getPokemonImage(res.data));
      });
    }
  };

  return (
    <PokeCard onMouseEnter={handleHover}>
      <CardActionArea>
        <CardMedia component="img" image={image ? image : cardImage} />
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
