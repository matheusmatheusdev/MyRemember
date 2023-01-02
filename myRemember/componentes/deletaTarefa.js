const deletarTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));

    const index = id;
    tarefasCadastradas.splice(index, 1);//splice é para remover e o numero indica quem//
    //então splice ex 1 apartir dele ele mesmo remove ele mesmo//
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

    atualiza();
}

const BOTAODELETA = (atualiza, id) => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.classList.add("delete-button");
    botaoDeleta.innerText = " ✖ ";//texto dentro do botao//
    botaoDeleta.addEventListener("click", ()=> deletarTarefa(atualiza, id));

        return botaoDeleta;
}

export default BOTAODELETA;