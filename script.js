 const buscaEntrada = document.getElementById('busca');
 const btnBusca = document.getElementById('btnBusca');
 const pokemonInfo = document.getElementById('pokemon-info');

 async function buscaPokemon(pokemon) {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon.tol.owerC4se()}');

        if (response.ok) {
            const data = await response.json();
            displayPokemon(data);    
        }else {
            pokemonInfo.innerHTML = '<p>Pokemon não Encontrado. Tente Novamente!<p>';
        }
    } catch (erro){
        pokemonInfo.innerHTML = '<p>Ocorreu um erro ao buscar o Pokemon. Verifique sua conexão.<p>';
    }
 }

 function displayPokemon(data) {
    pokemonInfo.innerHTML = '<img src="${data.sprites.front_default}" alt="${data.name}"><h2>${data.name} (#${data.id})</h2><p>Altura: ${(data.height / 10).toFixed(1)}m</p><p>Peso: ${(data.weight / 10).toFixed(1)}Kg</p><p>Tipo: ${data.types.map(type +> type.type.name).join(', ')}</p>';
 }

 btnBusca.addEventListener('click', () => {
    const pokemon = buscaEntrada.value.trim();

    if (pokemon) {
        buscaPokemon(pokemon);
    } else {
        pokemonInfo.innerHTML = '<p>Por favor, insira um nome ou número de Pokèmon.</p>';
    }
 });