function ajuste() {
    var msg = window.document.getElementsByClassName('msg')[0];
    var img = window.document.getElementsByClassName('img')[0];
    var data = new Date();
    var hora = data.getHours();

    
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png';
        document.body.style.background = '#1914ff';
    } else {
        img.src = 'noite.png';
        document.body.style.background = '#515154';
    }
}
