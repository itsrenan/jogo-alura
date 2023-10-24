let listaNumerosSorteados = [];
let numeroLimite = 100;
//Váriavel para armazenar a função que gera o número aleatório
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Criamos uma função em que os parametros são 'tag' e 'texto', dentro dela temos sua ação que seria a variável 'let campo' onde executa a ação usando os parametros passado a ela.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Digite um número entre 1 e 100');
}

//Aqui chamamos a função em si
exibirMensagemInicial();

//Função sem parametro e sem retorno apenas para verificar se o botão de chute foi clicado.
function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let textoTentativas = `Descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', textoTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor');
        } else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++
        limparCampo();
    }
    
}

//Usamos o return nessa função para que no momento que ela for chamada ela retorne o valor criado pela função Math.random() para a variavel numeroSecreto
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}