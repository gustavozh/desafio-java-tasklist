package br.com.desafio.taskmanager.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.desafio.taskmanager.entity.Task;

public interface TaskRepository extends CrudRepository<Task, Long>{

}
