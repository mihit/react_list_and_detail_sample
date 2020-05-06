import React, {Component} from 'react';
import TaskDetailView from './task_detail_view'
import Task from './task'

class TaskList extends Component {
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
        showing_detail_id: null,
    }

    handleShowDetail = task => {
        console.log( task + ' called')
    }

    render() {
        return (
            <div>
                { this.state.list.map(task => (
                    <Task key={task.id}
                          headline={task.headline}
                          desc={task.desc}
                          onShowDetail={ this.handleShowDetail }
                    />
                    )
                ) }
            </div>
        )
    }
}

export default TaskList