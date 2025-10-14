
// Manhã: #8DA7B2
// Tarde: #C28B52
// Noite: #382B44

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        document.body.style.background = '#8DA7B2'
        img.src = 'img/manha.png'
} else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        document.body.style.background = '#C28B52'
        img.src = 'img/tarde.png'
} else {
        // BOA NOITE!
        document.body.style.background = '#382B44'
        img.src = 'img/noite.png'
    }
}
