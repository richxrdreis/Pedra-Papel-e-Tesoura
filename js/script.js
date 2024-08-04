function PegarNumeroAleatorioDoComputador() {
  const opcao = ["Pedra", "Papel", "Tesoura"];
  const aleatorioIndex = Math.floor(Math.random() * opcao.length);
  return opcao[aleatorioIndex];
}

function jogadorVenceRound(player, computador) {
  return (
    (player === "Pedra" && computador === "Tesoura") ||
    (player === "Tesoura" && computador === "Papel") ||
    (player === "Papel" && computador === "Pedra")
  );
}

let pontosPlayer = 0;
let pontosComputador = 0;

function PegarResultadoRound(opcaoUsuario) {
  const resultadoComputador = PegarNumeroAleatorioDoComputador();

  if (jogadorVenceRound(opcaoUsuario, resultadoComputador)) {
    pontosPlayer++;
    return `Você venceu! ${opcaoUsuario} ganhou de ${resultadoComputador}`;
  } else if (resultadoComputador === opcaoUsuario) {
    return `Empatou! Os dois escolheram ${opcaoUsuario}`;
  } else {
    pontosComputador++;
    return `Computador venceu! ${resultadoComputador} ganhou de ${opcaoUsuario}`;
  }
}

const pontosDoJogador = document.getElementById("jogador-pontuou");
const pontosDoComputadorMsg = document.getElementById("computador-pontuou");
const resultadoDoRoundMsg = document.getElementById("resultado-msg");
const vencedorMensagem = document.getElementById("vencedor-msg");
const opcaoContainer = document.getElementById("opcao-container");
const resetarJogoBtn = document.getElementById("reiniciar-jogo-butao");

function desativarBotoes() {
  pedraBtn.disabled = true;
  papelBtn.disabled = true;
  tesouraBtn.disabled = true;
}

function ativarBotoes() {
  pedraBtn.disabled = false;
  papelBtn.disabled = false;
  tesouraBtn.disabled = false;
}

function mostrarResultado(opcaoUsuario) {
  resultadoDoRoundMsg.innerText = PegarResultadoRound(opcaoUsuario);
  pontosDoComputadorMsg.innerText = pontosComputador;
  pontosDoJogador.innerText = pontosPlayer;
  if (pontosPlayer === 3 || pontosComputador === 3) {
    vencedorMensagem.innerText = `${
      pontosPlayer === 3 ? "Player" : "Computador"
    } venceu o jogo!`;

    resetarJogoBtn.style.display = "block";
    opcaoContainer.style.display = "none";
    console.log(desativarBotoes);
  }
}

function reiniciarJogo() {
  pontosPlayer = 0;
  pontosComputador = 0;
  pontosDoComputadorMsg.innerText = pontosComputador;
  pontosDoJogador.innerText = pontosPlayer;
  resetarJogoBtn.style.display = "";
  opcaoContainer.style.display = "block";
  vencedorMensagem.innerText = "";
  resultadoDoRoundMsg.innerText = "";
  ativarBotoes();
}

resetarJogoBtn.addEventListener("click", reiniciarJogo);

const pedraBtn = document.getElementById("pedra-btn");
const papelBtn = document.getElementById("papel-btn");
const tesouraBtn = document.getElementById("tesoura-btn");

pedraBtn.addEventListener("click", function () {
  mostrarResultado("Pedra");
});

papelBtn.addEventListener("click", function () {
  mostrarResultado("Papel");
});

tesouraBtn.addEventListener("click", function () {
  mostrarResultado("Tesoura");
});
