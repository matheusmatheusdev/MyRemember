const concluirTarefa = (atualiza, id) => {
    //getItem pega um item////altera o estado//
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));

    //id é para ver se a tarefa esta concluida ou nao//
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

    //setItem devolve o item////coloca devolta//
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

    atualiza()
}

const BOTAOCONCLUI = (atualiza, id) => {
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = " ✔ ";//texto dentro do botao//
    // ()=> isso é uma função anonima//
    botaoConclui.addEventListener("click", ()=> concluirTarefa(atualiza, id));

    return botaoConclui;
}

export default BOTAOCONCLUI;