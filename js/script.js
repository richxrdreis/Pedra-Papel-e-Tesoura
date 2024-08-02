function numeroAleatorioDoComputador() {
  const opcao = ["Pedra", "Papel", "Tesoura"];
  const aleatorioIndex = Math.floor(Math.random() * opcao.length);
  return opcao[aleatorioIndex];
}

let pontosPlayer = 0;
let pontosComputador = 0;

function jogadorVenceRound(player, computador) {
  return (
    (player === "Pedra" && computador === "Tesoura") ||
    (player === "Tesoura" && computador === "Papel") ||
    (player === "Papel" && computador === "Pedra")
  );
}
