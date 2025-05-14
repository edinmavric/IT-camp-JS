const container = document.createElement('div');
document.body.appendChild(container);

async function fetchPokemonList() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9'
  );
  const data = await res.json();
  return data.results;
}

async function fetchPokemonDetails(url) {
  const res = await fetch(url);
  return await res.json();
}

function renderPokemon(pokemon) {
  const moves = pokemon.moves
    .slice(0, 5)
    .map(m => `<li>${m.move.name}</li>`)
    .join('');
  const stats = pokemon.stats
    .map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`)
    .join('');
  const types = pokemon.types.map(t => `<li>${t.type.name}</li>`).join('');
  return `
    <div style="border:1px solid #ccc; margin:10px; padding:10px;">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      <h2>${pokemon.name}</h2>
      <strong>Moves:</strong>
      <ul>${moves}</ul>
      <strong>Stats:</strong>
      <ul>${stats}</ul>
      <strong>Types:</strong>
      <ul>${types}</ul>
    </div>
  `;
}

async function displayPokemons() {
  const list = await fetchPokemonList();
  const details = await Promise.all(list.map(p => fetchPokemonDetails(p.url)));
  container.innerHTML = details.map(renderPokemon).join('');
}

displayPokemons();
