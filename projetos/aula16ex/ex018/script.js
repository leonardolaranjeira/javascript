
// Variáveis HTML
const valorEscolhido = document.getElementById('num');
const selectNumeros = document.getElementById('lista');
const erroElemento = document.getElementById('erro');
const res = document.getElementById('res');

// Variáveis internas
const listaValores = [];
let c = 0;

function atribuirValor() {
    erroElemento.textContent = '';
    res.textContent = '';
    const valorString = valorEscolhido.value.trim();

    if (valorString.length === 0) {
        erroElemento.textContent = '[ERRO] Nenhum valor foi digitado!';
        return;
    } else {
        if (!listaValores.includes(valorString) && valorString >= 1 && valorString <= 100) {
            const n = Number(valorString);
            const item = document.createElement('option');
            item.text = `Valor ${n} adicionado.`;
            c++;
            item.value = `lista${c}`;
            selectNumeros.appendChild(item);
            listaValores.push(valorString);
            erroElemento.textContent = '';
        } else {
            erroElemento.textContent = '[ERRO] O valor escolhido já está na lista ou ele está forá dos limites (1 à 100)!'
        }
    }

    valorEscolhido.value = ''; // Limpa o formulário após a adição de valor ou de mensagem de erro.
    valorEscolhido.focus(); // Mantem o usuário no formulário
}

function resultado() {
    let qtde = listaValores.length;
    let soma = 0;

    erroElemento.textContent = '';

    let primeiroValor = Number(listaValores[0]);
    let maior = primeiroValor
    let menor = primeiroValor

    for (let c = 0; c < listaValores.length; c++) {
        let num = Number(listaValores[c])

        soma += num;

        if (num > maior) {
            maior = num;
        }
        
        if (num < menor){
            menor = num;
        }
    }
    
    let media = soma / listaValores.length

    res.innerHTML = `
    <p>Ao todo, temos ${qtde} números cadastrados.</p>
    <p>O maior valor informado foi: ${maior}.</p>
    <p>O menor valor informado foi: ${menor}.</p>
    <P>Somando todos os valores temos: ${soma}</P>
    <p>A média dos valores digitados é: ${media}</p>
    `
}
