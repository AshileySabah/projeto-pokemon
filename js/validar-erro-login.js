nomeUsuario = sessionStorage.getItem('nomeUsuario');
if(nomeUsuario == null){
    setTimeout(() => {window.location.href = '/index.html'}, 3000);
}