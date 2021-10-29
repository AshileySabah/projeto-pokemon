const botaoMenu = document.querySelector(".botao-menu");
botaoMenu.addEventListener("click", function(){
    const menu = document.querySelector(".lista-navegacao-principal");

    if(menu.classList.contains("visibilidade-padrao")){
        menu.classList.remove("visibilidade-padrao")
    }else{
        menu.classList.add("visibilidade-padrao")
    }
});
