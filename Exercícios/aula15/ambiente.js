//modelo 'for' (teste lógico, condição, incremento)
let num = [ 5 , 8 , 4 ]
    num[3] = 6
    num.push(7)
    num.length 
console.log (num)
console.log (`Nosso vetor é o ${num}`)
console.log (`O vetor tem ${num.length} posições`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`O valor está na posição ${pos}`)
}


