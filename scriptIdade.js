function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade<10) {
                //criança
                img.setAttribute('src', 'crianca.menino.webp')
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.menino.webp')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.webp')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.webp')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade<10) {
                //criança
                img.setAttribute('src', 'menina.webp')
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.menina.webp')
            } else if(idade < 50) {
                //adulta
                img.setAttribute('src', 'mulher.png')
            } else{
                //idosa
                img.setAttribute('src', 'idosa.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectaos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}