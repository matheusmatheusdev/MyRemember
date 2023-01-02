import {criaData} from "./criarData.js";
import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";

export const carregaTarefa = () => {
    const lista = document.querySelector("[data-list]");

    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"))|| [];

    lista.innerHTML = " "; //quando tem as aspas vazias é para limpar//
    const datasUnicasLS = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(datasUnicasLS);

    datasUnicasLS.forEach((dia) => {
        lista.appendChild(criaData(dia));
    })
}