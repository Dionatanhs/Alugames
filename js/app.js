let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    const contador = document.getElementById('contador');
    contador.textContent = `Jogos alugados: ${jogosAlugados}`;
}

function alterarStatus(id){
    // Acessar o <li> do jogo clicado
    const gameClicado = document.getElementById(`game-${id}`);

    // Acessar a div da imagem dentro do <li>
    const imagem = gameClicado.querySelector('.dashboard__item__img');

    // Acessar o botão dentro do <li>
    const botao = gameClicado.querySelector('.dashboard__item__button');

    // Acessar o nome do jogo
    const nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // Verifica se o jogo está alugado
    const estaAlugado = imagem.classList.contains('dashboard__item__img--rented');


    if(estaAlugado) {

        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});