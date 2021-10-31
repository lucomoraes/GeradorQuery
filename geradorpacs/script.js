//Apontamento de campos:
//Botões:
const btnAC = document.querySelector('#btn_ac');
const btnProntuario = document.querySelector('#btn_prontuario');
const btnStudyID = document.querySelector('#btn_studyid');
const btnRemoteAet = document.querySelector('#btn_remoteaet');
const btnInicio = document.querySelector('#btn-inicio');

const btnClipboardMWLAC = document.querySelector('#btn_mwl_data_AC');
const btnClipboardStudyTableAC = document.querySelector('#btn_ds_studytable_AC');
const btnClipboardIVFPAC = document.querySelector('#btn_ds_imageviewfullpath_AC');

const btnClipboardMWLProntuario = document.querySelector('#btn_mwl_data_prontuario');
const btnClipboardStudyTableProntuario = document.querySelector('#btn_ds_studytable_prontuario');
const btnClipboardIVFPACProntuario = document.querySelector('#btn_ds_imageviewfullpath_prontuario');

const btnClipboardImageStudyid = document.querySelector('#btn_ds_imagetable_studyid');
const btnClipboardSeriesStudyid = document.querySelector('#btn_ds_seriestable_studyid');
const btnClipboardStudyTableStudyid = document.querySelector('#btn_ds_studytable_studyid');
const btnClipboardIVFPACStudyid = document.querySelector('#btn_ds_imageviewfullpath_studyid');

const btnClipboardMWLRemote = document.querySelector('#btn_mwl_data_remote');
const btnClipboardRemote = document.querySelector('#btn_ds_remoteaet_remote');
const btnClipboardStudyTableRemote = document.querySelector('#btn_ds_studytable_remote');
const btnClipboardIVFPACRemote = document.querySelector('#btn_ds_imageviewfullpath_remote');

//Campos:
const queryStudyTableAC = document.querySelector('#ds_studytable_AC');
const queryImageViewFullPathAC = document.querySelector('#ds_imageviewfullpath_AC');
const queryMWLDataAC = document.querySelector('#mwl_data_AC');

const queryStudyTableProntuario = document.querySelector('#ds_studytable_prontuario');
const queryImageViewFullPathPontuario = document.querySelector('#ds_imageviewfullpath_prontuario');
const queryMWLDataProntuario = document.querySelector('#mwl_data_prontuario');

const queryStudyTableStudyId = document.querySelector('#ds_studytable_studyid');
const queryImageViewFullPathStudyId = document.querySelector('#ds_imageviewfullpath_studyid');
const querySeriesTableStudyId = document.querySelector('#ds_seriestable_studyid');
const queryImageTableStudyId = document.querySelector('#ds_imagetable_studyid');

const queryStudyTableRemoteAet = document.querySelector('#ds_studytable_remoteaet');
const queryImageViewFullPathRemoteAet = document.querySelector('#ds_imageviewfullpath_remoteaet');
const queryRemoteAets = document.querySelector('#ds_remoteaets_remoteaet');
const queryMWLDataRemoteAet = document.querySelector('#mwl_data_remoteaet');

//Retornar ao menu principal:
btnInicio.addEventListener('click', () => {
    window.location.href = "https://lucomoraes.github.io/GeradorQuery/home/home.html";
});

//Gerar querys:
//Accession number:
btnAC.addEventListener('click', () => {
    let inputAC = document.querySelector('#input_acnumber').value;
    queryStudyTableAC.innerHTML =  'SELECT * FROM '.fontcolor('#32CD32') + 'DS_STUDYTABLE ' + 'WHERE'.fontcolor('#32CD32') + ' ACCESSIONNUMBER = ' + "'"   
         + inputAC.fontcolor('#32CD32') + "'";
    queryImageViewFullPathAC.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'IMAGEVIEWFULLPATH ' + 'WHERE'.fontcolor('#32CD32') + ' ACCESSIONNUMBER = ' + "'"   
        + inputAC.fontcolor('#32CD32') + "'";         
    queryMWLDataAC.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'MWL_DATA ' + 'WHERE'.fontcolor('#32CD32') + ' ACCESSIONNUMBER = ' + "'"   
        + inputAC.fontcolor('#32CD32') + "'";         
    btnClipboardMWLAC.setAttribute('style', 'display: inline-block');
    btnClipboardStudyTableAC.setAttribute('style', 'display: inline-block');
    btnClipboardIVFPAC.setAttribute('style', 'display: inline-block');
});

//Prontuário:
btnProntuario.addEventListener('click', () => {
    let inputProntuario = document.querySelector('#input_prontuario').value
    queryStudyTableProntuario.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'DS_STUDYTABLE ' + 'WHERE'.fontcolor('#32CD32') + ' PATIENTID_FKEY = ' + "'"   
        + inputProntuario.fontcolor('#32CD32') + "'";
    queryImageViewFullPathPontuario.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'IMAGEVIEWFULLPATH ' + 'WHERE'.fontcolor('#32CD32') + ' PATIENTID = ' + "'"   
        + inputProntuario.fontcolor('#32CD32') + "'";
    queryMWLDataProntuario.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'MWL_DATA ' + 'WHERE'.fontcolor('#32CD32') + ' SCHEDPATIENTID = ' + "'"   
        + inputProntuario.fontcolor('#32CD32') + "'";        
    btnClipboardMWLProntuario.setAttribute('style', 'display: inline-block');
    btnClipboardStudyTableProntuario.setAttribute('style', 'display: inline-block');
    btnClipboardIVFPACProntuario.setAttribute('style', 'display: inline-block');
});

//StudyID:
btnStudyID.addEventListener('click', () => {
    inputStudyID = document.querySelector('#input_studyid').value
    queryStudyTableStudyId.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'DS_STUDYTABLE ' + 'WHERE'.fontcolor('#32CD32') + ' STUDY_UID = ' + "'"   
        + inputStudyID.fontcolor('#32CD32') + "'";
    querySeriesTableStudyId.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'DS_SERIESTABLE ' + 'WHERE'.fontcolor('#32CD32') + ' STUDYUID_FKEY = ' + "'"   
        + inputStudyID.fontcolor('#32CD32') + "'";
    queryImageTableStudyId.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'DS_IMAGETABLE ' + 'WHERE'.fontcolor('#32CD32') + ' STUDYUID_FKEY = ' + "'"   
        + inputStudyID.fontcolor('#32CD32') + "'";
    queryImageViewFullPathStudyId.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'IMAGEVIEWFULLPATH ' + 'WHERE'.fontcolor('#32CD32') + ' STUDYUID = ' + "'"   
        + inputStudyID.fontcolor('#32CD32') + "'";
    btnClipboardSeriesStudyid.setAttribute('style', 'display: inline-block');
    btnClipboardIVFPACStudyid.setAttribute('style', 'display: inline-block');
    btnClipboardStudyTableStudyid.setAttribute('style', 'display: inline-block');
    btnClipboardImageStudyid.setAttribute('style', 'display: inline-block');
});

//Remoteaets
btnRemoteAet.addEventListener('click', () => {
    let inputRemoteaet = document.querySelector('#input_remoteaet').value
    queryStudyTableRemoteAet.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'DS_STUDYTABLE ' + 'WHERE'.fontcolor('#32CD32') + ' REMOTEAET = ' + "'"   
    + inputRemoteaet.fontcolor('#32CD32') + "'";    
    queryRemoteAets.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'DS_REMOTEAETS ' + 'WHERE'.fontcolor('#32CD32') + ' REMOTEAET = ' + "'"   
    + inputRemoteaet.fontcolor('#32CD32') + "'";
    queryMWLDataRemoteAet.innerHTML = 'SELECT * FROM '.fontcolor('#32CD32') + 'MWL_DATA ' + 'WHERE'.fontcolor('#32CD32') + ' SCHEDSTATIONAETITLE = ' + "'"   
    + inputRemoteaet.fontcolor('#32CD32') + "'"; 
    btnClipboardMWLRemote.setAttribute('style', 'display: inline-block');
    btnClipboardStudyTableRemote.setAttribute('style', 'display: inline-block');
    btnClipboardRemote.setAttribute('style', 'display: inline-block');
});

//Clipboard:
//AC NUMBER:
btnClipboardMWLAC.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#mwl_data_AC');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardStudyTableAC.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_studytable_AC');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardIVFPAC.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_imageviewfullpath_AC');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

//Prontuário:
btnClipboardMWLProntuario.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#mwl_data_prontuario');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardStudyTableProntuario.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_studytable_prontuario');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardIVFPACProntuario.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_imageviewfullpath_prontuario');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

//StudyID:
btnClipboardSeriesStudyid.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_seriestable_studyid');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardStudyTableStudyid.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_studytable_studyid');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardIVFPACStudyid.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_imageviewfullpath_studyid');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardImageStudyid.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_imagetable_studyid');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

//Remote:
btnClipboardMWLRemote.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#mwl_data_remoteaet');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardStudyTableRemote.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_studytable_remoteaet');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardRemote.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_remoteaets_remoteaet');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

btnClipboardIVFPACRemote.addEventListener('click', () => {
    let textoClipBoard = document.querySelector('#ds_imageviewfullpath_remoteaet');
    navigator.clipboard.writeText(textoClipBoard.textContent);
})

