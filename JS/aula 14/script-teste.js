/*function test(testando){
	
	alert("virus " + testando);
	
}


function mudarcor(cor){
	
	var elemento = document.getElementById("test")
	elemento.style.color = cor;
}
*/

function valida(){
	
	var nome = document.getElementById('nome');
	if (nome.value == ""){
		
		alert("campo inválido");
	}
	else{
		alert("enviado com sucesso.");
	}
	
	
}