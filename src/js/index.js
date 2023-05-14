//getElementById pega elemento pot ID
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//querySelector pega o elemento por Tag
const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao")

//addEventListetener escuta que identifica o evento que aconteceu, no caso o clique. Após, estrutura da ação após click
botaoAlterarTema.addEventListener("click", () => {

    //contains mostra se contém a classe dentro da lista
 const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

 //toggle alterna classes
 body.classList.toggle("modo-escuro");

 if(modoEscuroEstaAtivo) {

     imagemBotaoTrocaTema.setAttribute("src","./src/imagens/sun.png");

   } else{
      /*add() adiciona uma classe na tag body
 body.classList.add("modo-escuro");*/

 //setAttribute busca e altera atributo da imagem
 imagemBotaoTrocaTema.setAttribute("src","./src/imagens/moon.png");
 }
});

