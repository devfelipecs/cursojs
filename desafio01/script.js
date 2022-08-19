function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagem.manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagem.tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    }else {
        //boa noite 
        img.src = 'imagem.noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}


