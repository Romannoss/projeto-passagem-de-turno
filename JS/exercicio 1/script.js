function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var result = document.getElementById('result')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        result.innerHTML = 'ERRO'

    } else {
        result.innerHTML = 'CONTANDO... '

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if( p <=0 ){

            result.innerHTML = 'passo inválido'
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                result.innerHTML += `${c} \u{1F449}`
            }


        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                result.innerHTML += `${c} \u{1F449}`

            }

        }

        result.innerHTML += `\u{1f3c1}`



    }
}