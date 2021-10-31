const idce = document.querySelector('#btn-idce');
const mpacs = document.querySelector('#btn-mpacs');

mpacs.addEventListener('click', () => {
    window.location = "/geradorpacs/index.html";
});

idce.addEventListener('click', () => {
    window.location = "/geradoridce/index.html";
});