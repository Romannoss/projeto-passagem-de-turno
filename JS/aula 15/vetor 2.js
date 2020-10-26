var num = [3, 5,3 8, 9]

num.push(1)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`segundo valor eh ${num[1]}`)

var pos = num.indexOf(4)

if(pos == -1){

    console.log('erro, valor nao encontrado')

}else{
    console.log(`valor na posiçao ${pos}`)
}


/*
'nome da var'.indexOf(numero da posiçao) 
serve para buscar um valor dentro do vetor

*/


/* 
modelo simplificado de ' for (var pos=0 ; pos < valores.length; pos++) '

for (var pos in valores){
    console.log(`posiçao ${pos} tem valor ${valores[pos]} `)
}

*/
