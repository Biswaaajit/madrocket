import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import PokemonFilters from "./PokemonFilters";
import NoDataPage from "./NoDataPage";

export default function HomePage() {
  const pokemonData = useLoaderData();
  const [currentData, setCurrentData] = useState(pokemonData);
  return (
    <div className="grow flex flex-col gap-y-6 py-8">
      <PokemonFilters
        setCurrentData={setCurrentData}
        pokemonData={pokemonData}
      />
      {currentData.length === 0 ? (
        <NoDataPage />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-6 transition-all">
          {currentData.map((eachData) => (
            <PokemonCard key={eachData.name} data={eachData} />
          ))}
        </div>
      )}
    </div>
  );
}
