import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './tasklist';
import TaskDetailView from './task_detail_view';

ReactDOM.render( <TaskList />, document.getElementById('root'))
ReactDOM.render( <TaskDetailView />, document.getElementById('detail'))
