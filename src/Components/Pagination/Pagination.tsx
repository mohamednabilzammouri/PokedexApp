import React, { useContext, useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { StyledPagination } from "./PaginationStyle";
import { MyPoKemonContext } from "../../Context/Context";
import { PokemonsPerPage } from "../../Constants/PokemonsPerPage";

export default function PaginationComponent() {
  let { numberOfPokemons, setCurrentPage } = useContext(MyPoKemonContext);
  const [count, setCount] = useState<number>();

  const handleChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    numberOfPokemons !== undefined &&
      setCount(Math.ceil(numberOfPokemons / PokemonsPerPage));
    console.log(numberOfPokemons);
  }, [numberOfPokemons]);

  return (
    <StyledPagination>
      <Stack spacing={2}>
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </StyledPagination>
  );
}
