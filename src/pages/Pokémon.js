import getHash from "../utils/getHash";
import getPokémon from "../utils/getPokémon";

const Pokémon = async () => {
  const id = getHash();
  const pokémon = await getPokémon(id);
  const view = `
    <div class="pokémon-inner">
      <article class="pokémon-card">
        <img src="${pokémon.sprites.front_default}" alt="${pokémon.name}">
        <h2>
          Name
        </h2>
        <span>
          ${pokémon.name}
        </span>
      </article>
      <article class="pokémon-card">
        <h3>
          Number: 
        </h3>
          <span>
            ${pokémon.id}
          </span>
        <h3>
          Types:
        </h3>
          <span>
            ${pokémon.types[0].type.name}
          </span>
          ${
            pokémon.types[1] ? `<span>${pokémon.types[1].type.name}</span>` : ``
          } 
        <h3>
          Weight: 
        </h3>
            <span>
              ${pokémon.weight}
            </span>
      </article>
    </div>
  `;
  return view;
};

export default Pokémon;
