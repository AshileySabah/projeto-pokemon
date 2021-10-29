const paragrafoCopyright = document.querySelector('[data-rodape-copyright]');
const anoAtual = new Date().getFullYear();
const textoParagrafoCopyright = `ThePokeWorld &copy; ${anoAtual}`;
paragrafoCopyright.innerHTML = textoParagrafoCopyright;

const paragrafoDesenvolvidoPor = document.querySelector('[data-desenvolvido-por]');
const textoDesenvolvidoPor1 = 'Desenvolvido por Ashiley';

efeitoEscrever = (elemento, texto) => {
    elemento.textContent = '';
    const arrayTexto = texto.split('');
    arrayTexto.forEach((cadaLetra, posicao) => {
        setTimeout(() => {
            elemento.innerHTML += cadaLetra;
        }, 100*posicao);
    })
}

efeitoEscrever(paragrafoDesenvolvidoPor, textoDesenvolvidoPor1);