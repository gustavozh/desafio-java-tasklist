package br.com.desafio.taskmanager.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Task {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String titulo;
	private Status status;
	private String descricao;
	
	public Task() {}

	public Task(String titulo, Status status, String descricao) {
		super();
		this.titulo = titulo;
		this.status = status;
		this.descricao = descricao;
	}
	
	
}
