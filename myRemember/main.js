import {novoItem} from "./componentes/criaumaTarefa.js";
import {carregaTarefa} from "./componentes/carregaTarefa.js";

let tema = localStorage.getItem("data-theme")
const checkbox = document.getElementById("darkmodeQuadrado")

const mudarParaDark = () => {
   document.documentElement.setAttribute("data-theme", "dark")
   localStorage.setItem("data-theme", "dark")
   console.log("modo escuro")
}

const mudarParaLight = () => {
   document.documentElement.setAttribute("data-theme", "light")
   localStorage.setItem("data-theme", 'light')
   console.log("modo branco")
}

if(tema === "dark"){
   mudarParaDark()
}

checkbox.addEventListener("click", () => {
   let tema = localStorage.getItem("data-theme")
   if(tema ==="dark"){
      mudarParaLight()
   }else{
      mudarParaDark()
   }
})

const botaoLembrar = document.querySelector("[data-form-button]");

botaoLembrar.addEventListener("click", novoItem);

carregaTarefa();