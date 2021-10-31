const areaAlert = document.querySelector('[data-area-alert]');
const caixaAlert = sessionStorage.getItem('caixaAlert');

if(caixaAlert === null){
    areaAlert.innerHTML = `
    <div class="alert alert-success caixa-alert" role="alert">
        <div class="conteudo-alert">
            <h4 class="alert-heading">Muito bem, ${nomeUsuario}!</h4>
            <hr>
            <p class="mb-0">Seja muito bem vindo(a) ao ThePokeWorld!</p>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" data-button-alert></button>
    </div>
    `;
}else{
    areaAlert.innerHTML = '';
}