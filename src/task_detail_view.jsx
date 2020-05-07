import React, { Component } from "react";

class TaskDetailView extends Component {

    render() {
        const t = this.props.selected;
        return (
            <div>
                <h1>詳細</h1>
                <div>{ t.headline }</div>
                <div>{ t.desc }</div>
                <div>{ t.id }</div>
            </div>
        )
    }
}

export default TaskDetailView