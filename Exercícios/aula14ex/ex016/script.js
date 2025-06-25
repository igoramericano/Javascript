function contar () {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp') 
    let res = document.getElementsByClassName('res')[0]

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c +=p ) {
            res.innerHTML += ` ${c} \u{27A1}` 
            }

        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -=p ) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += ` \u{1F3C1}` 
    }
}