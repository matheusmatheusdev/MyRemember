import { carregaTarefa } from "./carregaTarefa.js";
import BOTAOCONCLUI from "./concluiTarefa.js";
import BOTAODELETA from "./deletatarefa.js";

export const novoItem = (evento) => {
  evento.preventDefault();
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];//parse para voltar a ser objeto//
  const input = document.querySelector("[data-form-input]");
  const quadradinho = input.value;//pegar o valor do quadradinho//

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);//value é para pegar o valor que tem dentro da const//
  const horario = data.format("HH:mm");

  const dataFormatada = data.format("DD/MM/YYYY");

  //localstorage button concluida para riscar//
  const concluida = false //false o botao não foi apertado//

  //input.quadradinho = " ";//

  const dados = {
    quadradinho, 
    dataFormatada,
    horario,
    concluida
  };

  const tarefasAtualizadas = [... tarefas, dados];

  localStorage.setItem("tarefas" , JSON.stringify(tarefasAtualizadas));

  input.value = " ";

  carregaTarefa();
}

export const criarLembrança = ({quadradinho, horario, concluida,}, id) => {  

  const tarefa = document.createElement("li");
 
  const conteudo = `<p class="content">${horario} - ${quadradinho}</p>`;

  if(concluida){
    tarefa.classList.add("done");//done = terminado//
  }
  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;
    
  tarefa.appendChild(BOTAOCONCLUI(carregaTarefa, id));
    
  tarefa.appendChild(BOTAODELETA(carregaTarefa, id));

  return tarefa;
}