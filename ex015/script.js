function verificar() { 
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res') 
// Ambos query e Id funcionam 
// se o ano for 0 ou o ano for maior que o ano atual 
    if (fano.value == 0 || fano.value >ano) {  
        window.alert('Verifique os dados e tente novamente')
    } else { 
        var fsex = document.getElementsByName('radsex') //capturei o sexo
        var idade = ano - fano.value 
        var genero =""
        var img = document.createElement('img') // criou uma tag img
        img.setAttribute('id', 'foto') // é a msm coisa se colocasse o id no HTML

        if(fsex[0].checked) { 
            genero = "Homem"
            if(idade >=0 && idade <= 10) { 
                //crianca
                img.setAttribute('src','homemCriança.png')
            }else if (idade>10 && idade<21) { 
                // jovem
                img.setAttribute('src', 'homemJovem.png')
            }else if(idade >21 && idade <50) { 
                //adulto
                img.setAttribute('src', 'homemAdulto.png')
            }else if(idade >50){ 
                //idoso
                img.setAttribute('src', 'homemIdoso.png')
            }
        }else if(fsex[1].checked){ 
            genero = 'Mulher'
            if(idade >=0 && idade <= 10) { 
                //crianca
                img.setAttribute('src', 'bebeMulher.png')
            }else if (idade>10 && idade<21) { 
                // jovem
                img.setAttribute('src','jovemMulher.png')
            }else if(idade >21 && idade <50) { 
                //adulto
                img.setAttribute('src','mulherAdulta.png')
            }else if(idade >50){ 
                //idoso
                img.setAttribute('src','mulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}