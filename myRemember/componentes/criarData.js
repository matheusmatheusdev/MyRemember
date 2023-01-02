import {criarLembrança} from "./criaumaTarefa.js";

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"))||[];//|| e [] caso não receba nenhum valor no começo//

    const dataMoment = moment(data, "DD/MM/YYYY");
    const dataTopo = document.createElement("li");
    const dentroLi = `<p class="content-data">${dataMoment.format("DD/MM/YYYY")}</p>`;

    //acessar o conteudo interno do elemento - inner.html//
    dataTopo.innerHTML = dentroLi;
    //forEach é para pegar os dados do localStorage//
    tarefas.forEach(((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, "DD/MM/YYYY");

    //diff é para subtrair as datas(função do moment)//
        const diff = dataMoment.diff(dia);
        if(diff == 0){
            dataTopo.appendChild(criarLembrança(tarefa, id));
        };
    }));

    return dataTopo;

}