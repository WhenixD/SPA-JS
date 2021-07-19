import getHash from '../utils/getHash';
import getPokémon from '../utils/getPokémon';
import firstToUpper from '../utils/toUpper';

const Pokémon = async () => {
  const id = getHash();
  const pokémon = await getPokémon(id);
  const view = `
    <div class="pokémon-inner">
      <article class="pokémon-card item-${pokémon.types[0].type.name}">
        <div class="img-container">
          <img src="${pokémon.sprites.front_default}" alt="${pokémon.name}">
        </div>
        <h2>
          Name
        </h2>
        <h3>
          ${firstToUpper(pokémon.name)}
        </h3>
      </article>
      <article class="pokémon-card item-${pokémon.types[0].type.name}">
        <h3>
          Number: 
        </h3>
          <span class="number">
            #${pokémon.id.toString().padStart(3, '0')}
          </span>
        <h3>
          Types:
        </h3>
        <div class="pokémon-type">
          <span class="type-${pokémon.types[0].type.name}">
            ${firstToUpper(pokémon.types[0].type.name)}
          </span>
          ${
            pokémon.types[1]
              ? `<span class="type-${
                  pokémon.types[1].type.name
                }">${firstToUpper(pokémon.types[1].type.name)}</span>`
              : ``
          } 
        </div>
        <h3>
          Abilities: 
        </h3>
            <h4>
              ${firstToUpper(pokémon.abilities[0].ability.name)}
            </h4>
            ${
              pokémon.abilities[1]
                ? `<h4>${firstToUpper(pokémon.abilities[1].ability.name)}</h4>`
                : ``
            }
      </article>
    </div>
  `;
  return view;
};

export default Pokémon;
