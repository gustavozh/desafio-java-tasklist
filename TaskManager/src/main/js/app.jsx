import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import client from './client'
import TaskList from './task/taskList.jsx'
import TaskForm from './task/taskForm.jsx'
import PageHeader from './template/pageHeader.jsx'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {tasks: [], titulo: "", descricao: ""};

		this.update = this.update.bind(this);
		this.delete = this.delete.bind(this);
		this.add = this.add.bind(this);
	}

	componentDidMount() {
		this.search();
	}

	render() {
		return (
			<div className="container">
				<PageHeader name="Task Manager" small="Cadastro" />
				<TaskForm add={this.add} titulo={this.state.titulo} descricao={this.state.descricao}/>
				<TaskList tasks={this.state.tasks} update={this.update} delete={this.delete}/>
			</div>
		)
	}

	search() {
		client({method: 'GET', path: '/api/tasks'}).done(response => {
			this.setState({tasks: response.entity._embedded.tasks});
		});
	}

	update(task) {
		client({
			method: 'PUT', 
			path: task._links.self.href,
			entity: task,
			headers: {'Content-Type': 'application/json'}
		}).done(response => {
			this.search();
		});
	}

	delete(task) {
		client({method: 'DELETE', path: task._links.self.href}).done(response => {
			this.search();
		});
	}

	add(task) {
		client({
			method: 'POST', 
			path: '/api/tasks',
			entity: task,
			headers: {'Content-Type': 'application/json'}
		}).done(response => {
			this.search();
		});
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)