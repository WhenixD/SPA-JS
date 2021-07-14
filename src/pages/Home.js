import getPokémon from "../utils/getPokémon";

const pokémonLimit = 10;
let pokémonList = [];

const Home = async () => {
  for (let i = 1; i <= pokémonLimit; i++) {
    let pokémon = await getPokémon(i);
    pokémonList.push(pokémon);
  }
  const viewPokémon = `
      <div class="pokémon">
      ${pokémonList.map(
        (pokémonList) => `
        <article class="pokémon-item">
          <a href="#/${pokémonList.id}/">
            <img src="${pokémonList.sprites.front_default}" alt="${pokémonList.name}">
            <h2>${pokémonList.name}</h2>
          </a>
        </article>
        `
      ).join("")}
      </div>
    `;
  return viewPokémon;
};

export default Home;
