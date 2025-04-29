function getTypeColors(type) {
  const typeColors = {
    normal: { bg: "#A8A77A", text: "#000000" },
    fighting: { bg: "#C22E28", text: "#FFFFFF" },
    flying: { bg: "#A98FF3", text: "#000000" },
    poison: { bg: "#A33EA1", text: "#FFFFFF" },
    ground: { bg: "#E2BF65", text: "#000000" },
    rock: { bg: "#B6A136", text: "#000000" },
    bug: { bg: "#A6B91A", text: "#000000" },
    ghost: { bg: "#735797", text: "#FFFFFF" },
    steel: { bg: "#B7B7CE", text: "#000000" },
    fire: { bg: "#EE8130", text: "#000000" },
    water: { bg: "#6390F0", text: "#FFFFFF" },
    grass: { bg: "#7AC74C", text: "#000000" },
    electric: { bg: "#F7D02C", text: "#000000" },
    psychic: { bg: "#F95587", text: "#000000" },
    ice: { bg: "#96D9D6", text: "#000000" },
    dragon: { bg: "#6F35FC", text: "#FFFFFF" },
    dark: { bg: "#705746", text: "#FFFFFF" },
    fairy: { bg: "#D685AD", text: "#000000" },
    stellar: { bg: "#4464A1", text: "#FFFFFF" }, // custom
    unknown: { bg: "#68A090", text: "#FFFFFF" },
  };

  return typeColors[type] || { bg: "#000000", text: "#FFFFFF" };
}

export default getTypeColors;
