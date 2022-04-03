import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export const PokeCard = styled(Card)`
  width: 20%;
  margin: 1em;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    width: 40%;
  }
`;
