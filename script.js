function pulaLinha (){
	document.write("<br>");
	document.write("<br>");

} 
function texto (frase){
	document.write(frase);
	pulaLinha();

}
/*function pegarHorario () {
    var data = new Date ();
    var hora = data.getHours();
    if(hora >= 0 && hora < 12){
        window.document.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <18){
        window.document.innerHTML = 'Boa tarde!'
    } else {
        window.document.innerHTML = 'Boa noite!'
    }
}*/

    

function gerar(){
     var stamp = new Date();
	 var hours;
     var time;
        hours = stamp.getHours();
		 	if (hours >= 18 && hours <24){
		 		time = " Boa noite";
		 	}
		 	
		 	if (hours >= 12 && hours <18){
		 		time = " Boa tarde";
		 	}
		 	
		 	if (hours >= 0 && hours <12) {
		 		time = " Bom dia";
		 	}
 	var inputNum1 = document.getElementById("num1").value;
	var inputNum2 = document.getElementById("num2").value;	

	texto(time + "<br><br>Primeiramente, a Uniodonto São José do Rio Preto agradece pelo interesse em poder contar com o benefício de utilizar nossos serviços. <br> Estive em contato com minha diretoria para buscar a melhor proposta para que possamos firmar parceria. Foi autorizado o plano no valor de R$" + inputNum1 + " mensalidade por vida e R$" + inputNum2 + " taxa de inscrição (também por vida), atendendo a todos os procedimentos presentes no ROL de cobertura ANS (anexo a esse e-mail) e cobertura nacional no Sistema Uniodonto (incluso tratamentos odontológicos previstos no ROL de cobertura e não sendo somente urgência e emergência).<br> Estamos a sua disposição para eventuais dúvidas e esclarecimentos que possam surgir. <br><br> Atenciosamente.");
}

var button = document.querySelector("button");
button.onclick = gerar;



// var mensalidade = terá que buscar o valor inserido no primeiro input 
// var taxaDeInscricao = terá que buscar o valor inserido no segundo input
//texto("Primeiramente, a Uniodonto São José do Rio Preto agradece pelo interesse em poder contar com o benefício de poder contar com nossos serviços. Estive em contato com minha diretoria para buscar a melhor proposta para que possamos firmar parceria. Foi autorizado o plano no valor de + var mensalidade mensalidade por vida e var + taxa de inscrição taxa de inscrição (também por vida), atendendo a todos os procedimentos presentes no ROL de cobertura ANS (anexo a esse e-mail) e cobertura nacional no Sistema Uniodonto (incluso tratamentos odontológicos previstos no ROL de cobertura e não sendo somente urgência e emergência). Estamos a sua disposição para eventuais dúvidas e esclarecimentos que possam surgir. Atenciosamente.")