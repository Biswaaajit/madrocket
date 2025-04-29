import { createContext, useState } from "react";

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemon, setPokemons] = useState([]);
  return (
    <PokemonContext value={{ pokemon, setPokemons }}>{children}</PokemonContext>
  );
}

export { PokemonContext, PokemonProvider };
