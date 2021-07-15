import getPokémon from '../utils/getPokémon';
import firstToUpper from '../utils/toUpper';

const pokémonLimit = 151;
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
				(pokémonList) =>
					`
        <article class="pokémon-item item-${pokémonList.types[0].type.name}">
          <a href="/#/${pokémonList.id}">
            <div class="img-container">
              <img src="${pokémonList.sprites.front_default}" alt="${firstToUpper(pokémonList.name)}">
            </div>
            <span class="number">
              #${pokémonList.id.toString().padStart(3, '0')}
            </span>
            <h2>${firstToUpper(pokémonList.name)}</h2>
            <div class="pokémon-type">
            <h3 class="type-${pokémonList.types[0].type.name}">
              ${firstToUpper(pokémonList.types[0].type.name)}
            </h3>
              ${pokémonList.types[1]
					? `<div class="separator"></div><h3 class="type-${pokémonList.types[1].type.name}">${firstToUpper(
							pokémonList.types[1].type.name
						)}</h3>`
					: ''}
            </div>
          </a>
        </article>
        `
			)
			.join('')}
      </div>
    `;

	return viewPokémon;
};

export default Home;
