//Apontamento de campos:
//Botões:
const btnAC = document.querySelector('#btn_ac');
const btnProntuario = document.querySelector('#btn_prontuario');
const btnAtendimentoHis = document.querySelector('#btn_atendimentoHis');
const btnIntegracaoHis = document.querySelector('#btn_integracaoHis');
const btnInicio = document.querySelector('#btn-inicio');

const btnClipboardRLEPAC = document.querySelector('#btn_RLEP_AC');
const btnClipboardRVEPAC = document.querySelector('#btn_RVEP_AC');
const btnClipboardRVEPMLCAC = document.querySelector('#btn_RVEPMLC_AC');
const btnClipboardISSSAC = document.querySelector('#btn_ISSS_AC');

const btnClipboardRVEPProntuario = document.querySelector('#btn_RVEP_prontuario');
const btnClipboardRVEPMLCProntuario = document.querySelector('#btn_RVEPMLC_prontuario');
const btnClipboardISSSProntuario = document.querySelector('#btn_ISSS_prontuario');

const btnClipboardRVEPAtendimentoHis = document.querySelector('#btn_RVEP_atendimentoHis');
const btnClipboardRVEPMLCAtendimentoHis = document.querySelector('#btn_RVEPMLC_atendimentoHis');

//Campos:
const avisoAC = document.querySelector('#aviso_AC');
const avisoProntuario = document.querySelector('#aviso_prontuario');

const queryRLEPAC = document.querySelector('#RLEP_AC');
const queryRVEPAC = document.querySelector('#RVEP_AC');
const queryRVEPMLCAC = document.querySelector('#RVEPMLC_AC');
const queryISSSAC = document.querySelector('#ISSS_AC');

const queryRVEPPontuario = document.querySelector('#RVEP_prontuario');
const queryRVEPMLCProntuario = document.querySelector('#RVEPMLC_prontuario');
const queryISSSProntuario = document.querySelector('#ISSS_prontuario');

const queryRVEPAtendimentoHis = document.querySelector('#RVEP_atendimentoHis');
const queryRVEPMLCAtendimentoHis = document.querySelector('#RVEPMLC_atendimentoHis');

//Retornar ao menu principal:
btnInicio.addEventListener('click', () => {
    window.location.href = "https://lucomoraes.github.io/GeradorQuery/home/home.html";
});

//Gerar querys:
//Accession number:
btnAC.addEventListener('click', () => {
    let inputAC = document.querySelector('#input_acnumber').value;
    queryRLEPAC.innerHTML =  'SELECT * FROM '.fontcolor('#32CD32') + 'RS_LAU_EXAME_PEDIDO ' + 'WHERE'.fontcolor('#32CD32') + ' CD_ITEM_PEDIDO_HIS = ' + "'"   
         + inputAC.fontcolor('#32CD32') + "'";
    queryRVEPAC.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'RS_VW_EXAME_PEDIDO ' + 'WHERE'.fontcolor('#32CD32') + ' CD_ITEM_PEDIDO_HIS = ' + "'"   
        + inputAC.fontcolor('#32CD32') + "'";         
    queryRVEPMLCAC.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'RS_VW_EXAME_PEDIDO_MULTI_LOGIN ' + 'WHERE'.fontcolor('#32CD32') + ' CD_ITEM_PEDIDO_HIS = ' + "'"   
        + inputAC.fontcolor('#32CD32') + "'";      
    queryISSSAC.innerHTML = 'SELECT '.fontcolor('#32CD32') + 'CD_INTEGRA_SAIDA_SOLIC_SADT, NM_PACIENTE, CD_ITEM_PEDIDO, CD_PACIENTE, DS_ERRO, TP_INTEGRACAO, DT_INTEGRACAO, ' + 
        ' * FROM '.fontcolor('#32CD32') + 'MVINTEGRA.INTEGRA_SAIDA_SOLICITACAO_SADT ' + 'WHERE'.fontcolor('#32CD32') + ' CD_ITEM_PEDIDO = ' + "'" 
            + inputAC.fontcolor('#32CD32') + "'";   
    btnClipboardISSSAC.setAttribute('style', 'display: inline-block');
    btnClipboardRLEPAC.setAttribute('style', 'display: inline-block');
    btnClipboardRVEPAC.setAttribute('style', 'display: inline-block');
    btnClipboardRVEPMLCAC.setAttribute('style', 'display: inline-block');
    avisoAC.setAttribute('style', 'display: inline-block');
});

//Prontuário:
btnProntuario.addEventListener('click', () => {
    let inputProntuario = document.querySelector('#input_prontuario').value;
    queryRVEPPontuario.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'RS_VW_EXAME_PEDIDO ' + 'WHERE'.fontcolor('#32CD32') + ' CD_PACIENTE_HIS = ' + "'"   
        + inputProntuario.fontcolor('#32CD32') + "'";
    queryRVEPMLCProntuario.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'RS_VW_EXAME_PEDIDO_MULTI_LOGIN ' + 'WHERE'.fontcolor('#32CD32') + ' CD_PACIENTE_HIS = ' + "'"   
        + inputProntuario.fontcolor('#32CD32') + "'";     
    queryISSSProntuario.innerHTML = 'SELECT '.fontcolor('#32CD32') + 'CD_INTEGRA_SAIDA_SOLIC_SADT, NM_PACIENTE, CD_ITEM_PEDIDO, CD_PACIENTE, DS_ERRO, TP_INTEGRACAO, DT_INTEGRACAO, ' + 
    ' * FROM '.fontcolor('#32CD32') + 'MVINTEGRA.INTEGRA_SAIDA_SOLICITACAO_SADT ' + 'WHERE'.fontcolor('#32CD32') + ' CD_PACIENTE = ' + "'" 
        + inputProntuario.fontcolor('#32CD32') + "'";     
    btnClipboardISSSProntuario.setAttribute('style', 'display: inline-block');
    btnClipboardRVEPProntuario.setAttribute('style', 'display: inline-block');
    btnClipboardRVEPMLCProntuario.setAttribute('style', 'display: inline-block');
    avisoProntuario.setAttribute('style', 'display: inline-block');
});

//Atendimento His:
btnAtendimentoHis.addEventListener('click', () => {
    let inputAtendimentoHis = document.querySelector('#input_atendimentoHis').value;
    queryRVEPAtendimentoHis.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'RS_VW_EXAME_PEDIDO ' + 'WHERE'.fontcolor('#32CD32') + ' CD_ATENDIMENTO_HIS = ' + "'"   
        + inputAtendimentoHis.fontcolor('#32CD32') + "'";
    queryRVEPMLCAtendimentoHis.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'RS_VW_EXAME_PEDIDO_MULTI_LOGIN ' + 'WHERE'.fontcolor('#32CD32') + ' CD_ATENDIMENTO_HIS = ' + "'"   
        + inputAtendimentoHis.fontcolor('#32CD32') + "'";
    btnClipboardRVEPAtendimentoHis.setAttribute('style', 'display: inline-block');
    btnClipboardRVEPMLCAtendimentoHis.setAttribute('style', 'display: inline-block');

});

//Clipboard:
//AC NUMBER:
btnClipboardRLEPAC.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#RLEP_AC');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardRVEPAC.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#RVEP_AC');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardRVEPMLCAC.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#RVEPMLC_AC');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})


btnClipboardISSSAC.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ISSS_AC');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

//Prontuário:
btnClipboardRVEPProntuario.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#RVEP_prontuario');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardRVEPMLCProntuario.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#RVEPMLC_prontuario');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardISSSProntuario.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ISSS_prontuario');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

//Atendimento His:
btnClipboardRVEPAtendimentoHis.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#RVEP_atendimentoHis');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardRVEPMLCAtendimentoHis.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#RVEPMLC_atendimentoHis');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})
