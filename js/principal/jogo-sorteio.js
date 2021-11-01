const numeroAleatorio = (min, max) => {
    const numero = Math.floor(Math.random() * (max - min) + min);
    return numero;
}

const requisicaoCards = () => {
    const caixaJogar = document.querySelector('[data-caixa-jogar]');

    caixaJogar.innerHTML = '';

    const arrayNumeros = [];
    var numPokemon;

    for(let i = 1; i <= 3; i++){
        numPokemon = numeroAleatorio(1, 6);
        arrayNumeros.push(numPokemon);

        caixaJogar.innerHTML += `
            <div class="area-card"><img src="https://cdn.traction.one/pokedex/pokemon/${numPokemon}.png" alt="Pokemon" class="img-card-jogar"></div>
        `;
    }

    var status = true;

    for(let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] != numPokemon){
            status = false;
        }
    }

    const mensagem = document.querySelector('[data-mensagem]');
    if(status){
        mensagem.innerHTML = 'Parabéns, todos iguais!';
    }else{
        mensagem.innerHTML = 'Opa, estão diferentes!';
    }
}

botaoJogar = document.querySelector('[data-button-jogar]');
botaoJogar.addEventListener('click', requisicaoCards);