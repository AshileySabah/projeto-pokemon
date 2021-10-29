paragrafoCopyright = document.querySelector('[data-rodape-copyright]');
anoAtual = new Date().getFullYear();
textoParagrafoCopyright = `ThePokeWorld &copy; ${anoAtual}`;
paragrafoCopyright.innerHTML = textoParagrafoCopyright;

paragrafoDesenvolvidoPor = document.querySelector('[data-desenvolvido-por]');
textoDesenvolvidoPor1 = 'Desenvolvido por Ashiley';

efeitoEscrever = (elemento, texto) => {
    elemento.textContent = '';
    arrayTexto = texto.split('');
    arrayTexto.forEach((cadaLetra, posicao) => {
        setTimeout(() => {
            elemento.innerHTML += cadaLetra;
        }, 100*posicao);
    })
}

efeitoEscrever(paragrafoDesenvolvidoPor, textoDesenvolvidoPor1);