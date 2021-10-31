const numeroAleatorio = () => {
    const numero = (Math.floor(Math.random()*10))+1;
    return numero;
}

const validarStatusRequisicao = response => {
    if(!response.ok){
        throw new Error('Status errado'+response.status);
    }
    return response.json();
}

const montarCardsRequisicao = (numPokemon) => {
    console.log(numPokemon);
    const imgTeste = document.querySelector('[data-card-img1]');
    imgTeste.setAttribute('src', `https://cdn.traction.one/pokedex/pokemon/${numPokemon}.png`)
}

const tratarErroRequisicao = () => {
    console.log('Falha ao consultar API');
}

const requisicaoCards = () => {
    const numPokemon = numeroAleatorio();
    // console.log(numPokemon)
    const url = `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;

    fetch(url)
    .then(validarStatusRequisicao)
    .then(montarCardsRequisicao(numPokemon))
    .catch(tratarErroRequisicao)
}

requisicaoCards();