nomeUsuario = sessionStorage.getItem('nomeUsuario');
if(nomeUsuario != null){
    window.location.href = '/home.html';
}else{
    setTimeout(() => {window.location.href = '/index.html'}, 3000);
}