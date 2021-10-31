const numeroAleatorio = (min, max) => {
    const numero = Math.floor(Math.random() * (max - min) + min);
    return numero;
}

const requisicaoCards = () => {
    for(let i = 1; i <= 2; i++){
        if(i == 1){
            var imgTeste = document.querySelector('[data-card-img1]');
        }else{
            var imgTeste = document.querySelector('[data-card-img2]');
        }

        const numPokemon = numeroAleatorio(1, 20);
        const url = `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;

        imgTeste.setAttribute('src', `https://cdn.traction.one/pokedex/pokemon/${numPokemon}.png`)
    }
}

requisicaoCards();