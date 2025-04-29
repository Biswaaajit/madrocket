async function homePageLoader() {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    if (!data.ok) {
      throw new Error("Failed to fetch Pokemon list");
    }
    const res = await data.json();
    return res.results;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export { homePageLoader };
