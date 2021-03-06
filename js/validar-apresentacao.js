const botaoApresentacao = document.querySelector('[data-button-apresentacao]');

const validarNomeApresentacao = (nome) => {
    const paragrafoValidacao = document.querySelector('[data-validar-apresentacao]');
    paragrafoValidacao.textContent = '';

    if(nome == ''){
        paragrafoValidacao.textContent = '*Por favor, digite seu nome.';
    }else if(nome.length == 1){
        paragrafoValidacao.textContent = '*Vamos lá, esse não é seu nome.\nPreciso de pelo menos 2 letras!';
    }else{
        sessionStorage.setItem('nomeUsuario', nome);
        return true;
    }
}

botaoApresentacao.addEventListener('click', function(evento){
    evento.preventDefault();

    const inputApresentacao = document.querySelector('[data-input-apresentacao]');
    const nomeUsuario = inputApresentacao.value;
    const status = validarNomeApresentacao(nomeUsuario);

    if(status){
        window.location.href = '/home.html';
    }
});