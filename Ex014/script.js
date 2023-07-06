function carregar(){ 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() 
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()

msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`

 if(hora >=0 && hora <=12) { 
    img.src = 'manha.png'
    document.body.style.background = '#bcc7cb'
 } else if( hora >=12 && hora<= 18){ 
    img.src= 'tarde.png'
    document.body.style.background = '#fd9a44'
 } else { 
    img.src= 'noite.png'
    document.body.style.background = '#02326d'
 }
}