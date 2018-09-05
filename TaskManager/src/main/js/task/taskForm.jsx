import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {titulo: props.titulo, descricao: props.descricao};

        this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
        this.handleChangeDescricao = this.handleChangeDescricao.bind(this);
        this.adicionar = this.adicionar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    handleChangeTitulo(e) {
		this.setState({...this.state, titulo: e.target.value})
    }
    
    handleChangeDescricao(e) {
		this.setState({...this.state, descricao: e.target.value})
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"><strong>Tarefa </strong></div>
                    <div className="col-sm-3">
                        <input type="text" placeholder="Título" onChange={this.handleChangeTitulo}
                            value={this.state.titulo} style={{width: '100%'}}/>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" placeholder="Descrição" onChange={this.handleChangeDescricao}
                            value={this.state.descricao} style={{width: '100%'}}/>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-primary" 
                            onClick={() => this.adicionar(this.props.add)}>Adicionar</button>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-secondary" onClick={() => this.limpar()}>Limpar</button>
                    </div>
                </div>
            </div>
        );
    }

    adicionar(add) {
        var task = {
            titulo: this.state.titulo,
            descricao: this.state.descricao,
            status: "PENDENTE"
        }
        this.limpar();
        add(task);
    }

    limpar() {
        this.setState({...this.state, titulo:"", descricao:""});
    }
}

export default TaskForm;