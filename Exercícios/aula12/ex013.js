var agora = new Date()
var diaSem = agora.getDay()

var agora = new Date()
var hora = agora.getHours()


/*
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('[ERRO] Dia inválido')
}

//hora abaixo

console.log (`Agora são exatamente ${hora} horas`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('boa tarde!')
} else {
    console.log('Boa noite!')
}

//todo tipo de situação usa if e else if, mas nem toda usa "Switch"