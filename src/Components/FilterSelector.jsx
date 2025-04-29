import { useEffect, useState } from "react";

function FilterSelector({ setCurrentData, pokemonData }) {
  const [types, setTypes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorSelector, setErrorSelector] = useState(null);

  // fetching all pokemon types
  useEffect(() => {
    async function getPokemonType() {
      try {
        setLoading(true);
        const res = await fetch("https://pokeapi.co/api/v2/type");
        if (!res.ok) {
          setErrorSelector("Failed to fetch pokemon types !!!");
          return;
        }
        const resData = await res.json();
        const typeArr = resData.results;
        setTypes([{ name: "all types", url: "all types" }, ...typeArr]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setErrorSelector(err.message);
      }
    }
    getPokemonType();
  }, []);

  //function to handle selector
  async function handleSelector(e) {
    let value = e.target.value;
    if (value === "all types") {
      setCurrentData(pokemonData);
      return;
    }
    const res = await fetch(value);
    const resData = await res.json();
    const pokArr = resData.pokemon;
    const pokSet = new Set(pokArr.map((p) => p.pokemon.name));
    const newData = pokemonData.filter((data) => pokSet.has(data.name));
    setCurrentData(newData);
  }

  //Error components
  if (errorSelector) {
    return (
      <p className="self-center w-fit text-red-500 capitalize">
        {errorSelector}
      </p>
    );
  }

  //Loading components
  if (isLoading)
    return (
      <p className="self-end px-2.5 py-1 capitalize bg-slate-200 rounded-md">
        loading
      </p>
    );

  return (
    <select
      onChange={handleSelector}
      className="capitalize  px-2.5 py-1 w-fit self-end hover:bg-slate-200 bg-slate-200/30 rounded-md"
    >
      {types.map((type) => (
        <option value={type.url} className="capitalize" key={type.name}>
          {type.name}
        </option>
      ))}
    </select>
  );
}

export default FilterSelector;
