import React, { Component } from 'react';

class Task extends Component{
    constructor(props) {
        super(props);
    }
	render() {
		return (
			<tr>
				<td>{this.props.task.titulo}</td>
				<td>{this.props.task.descricao}</td>
				<td>{this.props.task.status}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => this.atualizarStatus(this.props.task, this.props.update)}>
                        {this.props.task.status === "PENDENTE" ? "Concluir" : "Pendente" }
                    </button>
                    <button className="btn btn-warning">Editar</button>
                    <button className="btn btn-danger" onClick={() => this.props.delete(this.props.task)}>Excluir</button>
                </td>
			</tr>
		)
    }
    
    atualizarStatus(task, update) {
        if (task.status == "CONCLUIDA"){
			task.status = "PENDENTE";
		} else {
			task.status = "CONCLUIDA";
        }
        update(task);
    }
}

export default Task;