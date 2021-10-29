const numeroAleatorio = () => {
    const numero = (Math.floor(Math.random()*10))+1;
    return numero;
}

const num1 = numeroAleatorio();
const num2 = numeroAleatorio();

console.log(num1);
console.log(num2);

function requisicao(numPokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if(true){
        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
            }
        )
    }
}

requisicao(num1);
requisicao(num2);