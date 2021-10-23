paragrafoCopyright = document.querySelector('[data-rodape-copyright]');
anoAtual = new Date().getFullYear();
textoParagrafoCopyright = `ThePokeWorld &copy; ${anoAtual}`;
paragrafoCopyright.innerHTML = textoParagrafoCopyright;

paragrafoDesenvolvidoPor = document.querySelector('[data-desenvolvido-por]');
paragrafoDesenvolvidoPor.innerHTML = '';
textoDesenvolvidoPor = 'Desenvolvido por Ashiley!';
arrayTextoDesenvolvidoPor = textoDesenvolvidoPor.split('');
arrayTextoDesenvolvidoPor.forEach((cadaLetra, posicao) => {
    setTimeout(() => {
        paragrafoDesenvolvidoPor.innerHTML += cadaLetra;
    }, 100*posicao);
})