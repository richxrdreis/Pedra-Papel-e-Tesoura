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
const opcaoContainer = document.getElementById("opcao-container");
const resetarJogoBtn = document.getElementById("reiniciar-jogo-butao");

function mostrarResultado(opcaoUsuario) {
  resultadoDoRoundMsg.innerText = PegarResultadoRound(opcaoUsuario);
  pontosDoComputadorMsg.innerText = pontosComputador;
  pontosDoJogador.innerText = pontosPlayer;
  if (pontosPlayer === 3 || pontosComputador === 3) {
    resultadoDoRoundMsg.innerText = `${
      pontosPlayer === 3 ? "Player" : "Computador"
    } Venceu o jogo!`;

    resetarJogoBtn.style.display = "block";
    opcaoContainer.style.display = "none";
  }
}

function reiniciarJogo() {
  // ALTERAÇÕES POSSÍVEISS
  pontosPlayer = 0;
  pontosComputador = 0;
  pontosDoJogador.innerText = pontosPlayer;
  pontosDoComputadorMsg.innerText = pontosComputador;
  resultadoDoRoundMsg.innerText = "";
  resetarJogoBtn.style.display = "none";
  opcaoContainer.style.display = "block";
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
