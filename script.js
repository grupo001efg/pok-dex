 const buscaEntrada = document.getElementById('busca');
 const btnBusca = document.getElementById('btnBusca');
 const pokemon-info = document.getElementById('pokemon-info');

 async function buscaPokemon(pokemon) {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon.tol.owerC4se()}');

        if (response.ok) {
            const data = await response.json();
        }
    }
 }
