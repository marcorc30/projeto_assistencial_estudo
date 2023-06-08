	$('#opcao-sim').click(function(){
/*		$('#raAluno').val('');*/
		$('#RA-aluno').css('display','block');
		$('#botao-prosseguir').css('display', 'none');		
	}) 
	
	$('#opcao-nao').click(function(){
/*		$('#raAluno').val('');*/
		$('#RA-aluno').css('display','none');
		$('#botao-prosseguir').css('display', 'block');
		$('#nome-aluno').css("display", "none")
		$('#mensagem-erro-ra-inexistente').css("display", "none");	
		
	})




/* Função para buscar o aluno no server localhost:3000/alunos   */

$('#consultar-RA').click(buscarAluno);

$('#raAluno').keyup(function(){
	if ($('#raAluno').val() != ''){
		$('#consultar-RA').attr("disabled", false);
	}else{
		$('#consultar-RA').attr("disabled", true); 
	}
})

function buscarAluno(){
	
	$('#spinner').toggle();
	var alunoId = $("#raAluno").val();
	var dados = { id: alunoId};	
	
	console.log(dados);
	
	
	$.get("http://200.152.49.5:3000/alunos", dados, localizarDadosAluno)
	.fail(function(){
		console.log("entrou no erro")
			$('#mensagem-erro-ra-inexistente').text("Erro de conexão com servidor");
			$('#mensagem-erro-ra-inexistente').toggle();
		
	})
	.always(function(){
		console.log("Passando no always"); 
		$('#spinner').toggle();
	});
	
	
	
}

function localizarDadosAluno(data){
	
	try{
		console.log("entrou no localizarDados");
				
		var nomeAluno = $('#nome-aluno');
		
			$('#mensagem-erro-ra-inexistente').css("display", "none");	
			$('#mensagem-erro-ra-inexistente').text("RA não encontrada na base de dados");
			nomeAluno.text(data[0].nome);	
			nomeAluno.css("display", "block")
			
			console.log("O nome do aluno é " + nomeAluno.text())
			
			$('#botao-prosseguir').css('display', 'block');		
			
		
	}catch(e){
		 if (e instanceof TypeError) {
			console.log(e);
			$('#botao-prosseguir').css('display', 'none');		
			$('#mensagem-erro-ra-inexistente').css("display", "block");
			nomeAluno.css("display", "none")
			
		}else{
			$('#mensagem-erro-ra-inexistente').css("display", "block");
			
			
			
		}
			
	}finally{
		
	}
		
	
	

	
}
