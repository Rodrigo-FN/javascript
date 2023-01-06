function carregar() {
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = `./img/manha.jpg`
        document.body.style.background = '#fdd069'
    } else if (hora >= 12 && hora < 18) {
        img.src = './img/tarde.jpg'
        document.body.style.background = '#be6c56'
    } else {
        img.src = './img/noite.jpg'
        document.body.style.background = '#0a181b'
    }

}

