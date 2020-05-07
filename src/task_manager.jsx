import React, { Component } from "react";
import TaskDetailView from "./task_detail_view";
import TaskList from "./tasklist";

class TaskManager extends Component {
    state = {
        list: [
            {
                id: 1,
                headline: '卵',
                desc: 'スーパーで卵を買ってくる'
            },
            {
                id: 2,
                headline: 'チーズ',
                desc: 'チーズの詰め合わせを買う'
            },
            {
                id: 3,
                headline: 'ワイン',
                desc: '赤ワインの用意 予算800円'
            },
        ],
        selected : {
            headline : '',
            desc : '',
            id : '',
        }
    }


    handleSelect = task => {
        console.log( task.id + ' called')
        this.setState({ selected : task } )
    }

    render() {
        return (
            <React.Fragment>
            <TaskDetailView selected={this.state.selected} />
            <TaskList list={this.state.list} onClickTask={this.handleSelect}/>
            </React.Fragment>
        )
    }
}

export default TaskManager