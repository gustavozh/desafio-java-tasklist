import React, { Component } from 'react';
import Task from './task.jsx'

class TaskList extends Component{
    constructor(props) {
		super(props);
    }
    
	render() {
		var tasks = this.props.tasks.map(task =>
			<Task key={task._links.self.href} task={task} update={this.props.update} delete={this.props.delete}/>
		);
		return (
			<table className="table table-hover">
                <thead>
                    <tr>
						<th>Título</th>
						<th>Descrição</th>
						<th>Status</th>
                        <th>Ação</th>
					</tr>
                </thead>
				<tbody>
					{tasks}
				</tbody>
			</table>
		)
	}
}

export default TaskList;