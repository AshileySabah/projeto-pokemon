nomeUsuario = sessionStorage.getItem('nomeUsuario');
if(nomeUsuario == null){
    window.location.href = '/erro-login.html'
}