package org.lasalle.sigas.service.exception;

public class EmailJaCadastradoException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public EmailJaCadastradoException(String mensagem) {
		super(mensagem);
	}

}
