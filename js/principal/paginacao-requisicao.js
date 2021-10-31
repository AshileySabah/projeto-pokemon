const montarCardsConhecer = (objeto, num, elemento) => {

    const nome = objeto.forms[0].name;
    const tipo = objeto.types[0].type.name;
    const peso = objeto.weight;

    elemento.innerHTML += `
    <div class="caixa-card">
        <div class="caixa-imagem">
            <img src="https://cdn.traction.one/pokedex/pokemon/${num}.png" alt="Card de Pokemon" class="img-caixa-card">
        </div>
        <div class="caixa-especificacoes">
            <p class="especificacao">Nome: ${nome}</p>
            <p class="especificacao">Peso: ${peso}</p>
            <p class="especificacao">Tipo: ${tipo}</p>
        </div>
    </div>
    `;
}

const requisicaoCards = (paginacao) => {
    const secaoCards = document.querySelector('[data-secao-cards]');
    secaoCards.innerHTML = '';

    var inicio;
    var fim;

    if(paginacao > 1){
        fim = paginacao * 4;
        inicio = fim - 3;
    }else{
        inicio = 1;
        fim = inicio + 3;
    }

    for(let i = inicio; i <= fim; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url)
        .then(
            response => response.json()
        ).then(
            data => {
                montarCardsConhecer(data, i, secaoCards);
            }
        )
    }
}

requisicaoCards(1);

const mudarClassePaginacao = (event) => {
    const itensPaginacao = document.querySelectorAll('.page-item');
    for(let i = 0; i < itensPaginacao.length; i++){
        const cadaItem = itensPaginacao[i];

        cadaItem.classList.remove('active')
    }

    const itemPrincipal = event.target.parentNode;
    itemPrincipal.classList.add('active');

    const paginacaoEscolhida = event.target.textContent;
    requisicaoCards(paginacaoEscolhida);
}

const itensPaginacao = document.querySelectorAll('.page-item');
for(let i = 0; i < itensPaginacao.length; i++){
    const cadaItem = itensPaginacao[i];

    cadaItem.addEventListener('click', mudarClassePaginacao);
}