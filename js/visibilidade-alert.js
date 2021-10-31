botaoAlert = document.querySelector('[data-button-alert]');

const esconderAlert = () => {
    sessionStorage.setItem('caixaAlert', false);
}

if(botaoAlert != null){
    botaoAlert.addEventListener('click', esconderAlert);
}