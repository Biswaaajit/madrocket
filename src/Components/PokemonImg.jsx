function PokemonImg({ link }) {
  return (
    <div className="p-1 bg-white">
      <img className="w-[10rem]" src={link} alt={name} />
    </div>
  );
}

export default PokemonImg;
