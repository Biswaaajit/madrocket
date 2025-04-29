import FilterSelector from "./FilterSelector";

function PokemonFilters({ setCurrentData, pokemonData }) {
  //Input handler
  function handleInput(e) {
    let value = e.target.value;
    let newData = pokemonData.filter((data) => data.name.includes(value));
    setCurrentData(newData);
  }
  return (
    <div className="flex flex-col px-3 md:px-6 gap-3">
      <input
        type="text"
        className="border-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] self-center px-2 py-1.5 focus-within:outline-none rounded-md hover:border-amber-400 transition-all"
        placeholder="Enter your pokemon..."
        onChange={handleInput}
      />
      <FilterSelector
        setCurrentData={setCurrentData}
        pokemonData={pokemonData}
      />
    </div>
  );
}

export default PokemonFilters;
