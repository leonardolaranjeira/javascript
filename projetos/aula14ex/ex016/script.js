function contar() {
    const inicio = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const passo = document.getElementById('passo')
    const res = document.getElementById('res')

    if (inicio.value == 0 || fim.value == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar! O "Início" e o "Fim" não podem ser 0 (zero).'
        return;
    }
    
    const i = Number(inicio.value)
    const f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    res.innerHTML = 'Contando: <br>'
    
    if (i < f) {
        for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
        }
    } else { 
        for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
