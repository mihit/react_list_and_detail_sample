import React, { Component } from "react";

class TaskDetailView extends Component {
    render() {
        return (
            <div>
                <h1>詳細</h1>
                <div>{ this.props.headline }</div>
                <div>{ this.props.desc }</div>
                <div>{ this.props.id }</div>
            </div>
        )
    }
}

export default TaskDetailView