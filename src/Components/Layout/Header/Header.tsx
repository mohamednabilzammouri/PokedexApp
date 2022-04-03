import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Logo, StyledToolbar, Search } from "./HeaderStyle";
import PokemonLogo from "../../../pokemonlogo.png";

export default function Header(): JSX.Element {
  return (
    <Box>
      <AppBar>
        <StyledToolbar>
          <Logo src={PokemonLogo} />
          <Search />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
