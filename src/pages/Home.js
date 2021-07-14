import getPokémon from "../utils/getPokémon";

const pokémonLimit = 50;
let pokémonList = [];

const Home = async () => {
  for (let i = 1; i <= pokémonLimit; i++) {
    let pokémon = await getPokémon(i);
    pokémonList.push(pokémon);
  }
  const viewPokémon = `
      <div class="pokémon">
      ${pokémonList
        .map(
          (pokémonList) => `
        <article class="pokémon-item">
          <a href="/#/${pokémonList.id}">
            <img src="${pokémonList.sprites.front_default}" alt="${
            pokémonList.name
          }">
            <h2>${pokémonList.name}</h2>
            <div class="pokémon-type">
            <h3>
              ${pokémonList.types[0].type.name}
            </h3>
              ${
                pokémonList.types[1]
                  ? `<h3>${pokémonList.types[1].type.name}</h3>`
                  : ``
              }
              </div>
          </a>
        </article>
        <hr />
        `
        )
        .join("")}
      </div>
    `;
  return viewPokémon;
};

export default Home;
