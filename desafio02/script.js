function verificar () {
     var data = new Date()
     var ano = data.getFullYear()
     var fAno = document.getElementById('txtano')
     var res = document.getElementById('res')
     if (fAno.value.lenght == 0 || fAno.value > ano) {
         window.alert('[ERRO] Verfique os dados e tente novamente!')
     } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fAno.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
             gênero = 'Homem'
             if (idade >= 0 && idade < 10) {
                 //criança
                 img.setAttribute('src', 'bebe-h.jpg')
             } else if (idade < 21) {
                 //Jovem
                 img.setAttribute('src', 'jovem-h.jpg')
             } else if (idade < 50) {
                 //Adulto
                 img.setAttribute('src', 'adulto-h.jpg')
             } else {
                 //Idoso
                 img.setAttribute('src', 'idoso-h.jpg')
             }
         } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
         res.appendChild(img)
     }

}