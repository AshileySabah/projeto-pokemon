const numeroAleatorio = (min, max) => {
    const numero = Math.floor(Math.random() * (max - min) + min);
    return numero;
}

const requisicaoCards = () => {
    for(let i = 1; i <= 2; i++){
        if(i == 1){
            var caixaAlert = document.querySelector('[data-card-img1]');
        }else{
            var caixaAlert = document.querySelector('[data-card-img2]');
        }

        const numPokemon = numeroAleatorio(1, 20);

        caixaAlert.innerHTML = `
            <img src="https://cdn.traction.one/pokedex/pokemon/${numPokemon}.png" alt="Card de Pokemon" class="img-card">
        `;
    }
}

requisicaoCards();