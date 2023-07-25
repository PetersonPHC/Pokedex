const pokemonList = document.getElementById('pokemonList')
const buttonMoreLoad = document.getElementById("buttonMoreLoad")

const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
                <span class="numero">#${pokemon.number}</span>
                <span class="nome">${pokemon.name}</span>

                <div class="detalhe">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class ="type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img src="${pokemon.photo}" alt="Pokemon ${pokemon.name}">

                </div>

            </li>`
        ).join("");
    })
}

loadPokemonItens(offset, limit)

buttonMoreLoad.addEventListener("click", () => {
    offset += limit;
    const qtdPagCarrregadas = offset + limit

    if (qtdPagCarrregadas >= maxRecords) {
        const newLimit = (maxRecords - offset)
        loadPokemonItens(offset, newLimit)

        buttonMoreLoad.parentElement.removeChild(buttonMoreLoad)

    } else {
        loadPokemonItens(offset, limit)

    }
})
