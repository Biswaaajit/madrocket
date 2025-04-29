import { useEffect, useState } from "react";
import PokemonImg from "./PokemonImg";
import PoekmonType from "./PoekmonType";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";

function PokemonCard({ data }) {
  const { name, url } = data;
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getPokemon() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(`failed to fetch ${name} data`);
          return;
        }
        const resData = await res.json();
        setInfo(resData);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }
    getPokemon();
  }, [url, name]);

  //Error component
  if (error) {
    return <ErrorCard error={error} />;
  }

  //Loading components
  if (!info) {
    return <LoadingCard />;
  }
  return (
    <div className="w-[70%]   lg:w-[65%] flex flex-col lg:flex-row justify-around items-center bg-gradient-to-t lg:bg-gradient-to-r from-slate-500/60 to-zinc-800/60 px-2 py-1.5 sm:px-4 sm:py-4 gap-3 lg:gap-6 rounded-lg">
      <PokemonImg link={info.sprites.front_default} />
      <div className="self-start relative space-y-1 h-full ">
        <p className="font-semibold capitalize text-sm sm:text-lg">{name}</p>
        <div className="flex gap-2">
          {info.types.map((eachType, i) => (
            <PoekmonType key={i} name={eachType.type.name} />
          ))}
        </div>
        <p className="text-xs pt-2">Id : {info.id}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
