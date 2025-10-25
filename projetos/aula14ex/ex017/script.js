
const numero = document.getElementById('num')
const tabuada = document.getElementById('tab')

function gerarTabuada() {

    if (numero.value.length == 0) {
        numero.value = 0
    }

    const n = Number(numero.value)
    tabuada.innerHTML = ''

    for (let c = 1; c <= 10; c++) {
        const item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        item.value = `tab${c}`
        tabuada.appendChild(item)
    }
}
