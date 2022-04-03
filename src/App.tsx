import React from "react";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import PokemonCard from "./Components/Pokemon/PokemonCard/PokemonCard";
import PokemonCards from "./Components/Pokemon/PokemonCardsList/PokemonCards";

function App() {
  return (
    <>
      <Header />
      <PokemonCards
        DisplayedPokemons={[
          { name: "aaaa", number: 1 },
          { name: "bbb", number: 2 },
        ]}
      />
      <Footer />
    </>
  );
}

export default App;
