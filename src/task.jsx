import React, {Component} from "react";

class Task extends Component {
    state = {
    }

    render(){
        console.log(this.props)
        return (
            <li key={this.props.task.id}>
                {this.props.task.headline}
                <button onClick={ () => this.props.onClickTask(this.props.task) }>詳細</button>
            </li>
        )
    }

}

export default Task