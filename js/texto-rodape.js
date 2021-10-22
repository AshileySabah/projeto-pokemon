rodape = document.querySelector('[data-rodape]');
anoAtual = new Date().getFullYear();
textoRodape = `ThePokeWorld &copy; ${anoAtual}`;
rodape.innerHTML = textoRodape;
console.log(textoRodape)