import React, {Component} from 'react';
import Task from './task'

class TaskList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                { this.props.list.map(task => (
                    <Task key={task.id}
                          task={task}
                          onClickTask={ this.props.onClickTask }
                    />
                    )
                ) }
            </div>
        )
    }
}
//ReactDOM.render( <TaskList />, document.getElementById('list'))
export default TaskList