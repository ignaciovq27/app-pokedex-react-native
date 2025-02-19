export async function getPokemonList() {
  try {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";

    const rawData = await fetch(URL);
    const json = await rawData.json();
    const { results } = json;

    // Hacer una segunda llamada a la API por cada Pokémon
    const pokemonDetails = await Promise.all(
      results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();

        const { name, id, sprites, types } = details;

        return {
          name,
          id,
          sprite: sprites.front_default, // Imagen del Pokémon
          types: types.map((t) => t.type.name), // Tipos del Pokémon
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error("Error al obtener la lista de Pokémon:", error);
    return [];
  }
}

// export async function getGameDetails(slug) {
//     const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

//     const rawData = await fetch(GAME_DETAILS);
//     const json = await rawData.json();

//     const { components } = json;
//     const { title, description, criticScoreSummary, images } = components[0];
//     const { score } = criticScoreSummary;

//     // get the card image
//     const cardImage = images.find((image) => image.typeName === "cardImage");
//     const { bucketType, bucketPath } = cardImage;
//     const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

//     const rawReviews = components[3].data.items;

//     // get the reviews
//     const reviews = rawReviews.map((review) => {
//         const { quote, score, date, publicationName, author } = review;
//         return { quote, score, date, publicationName, author };
//     });

//     return {
//         img,
//         title,
//         slug,
//         description,
//         score,
//         reviews,
//     };
// }
