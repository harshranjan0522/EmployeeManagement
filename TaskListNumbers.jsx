import React from "react";
import './TaskListNumbers.css'

const TaskListNumbers = ({data}) => {

    return(
        <div className="container-tasklistnumbers" >
            <div className="tasklistnumbers">
                <div className="new">
                    <h1>{data.taskCounts.newTask}</h1>
                    <h2>NEW TASK</h2>
                </div>

                <div className="completed">
                    <h1>{data.taskCounts.completed}</h1>
                    <h2>COMPLETED</h2>
                </div>

                <div className="accepted">
                    <h1>{data.taskCounts.active}</h1>
                    <h2>ACCEPTED</h2>
                </div>

                <div className="failed">
                    <h1>{data.taskCounts.failed}</h1>
                    <h2>FAILED</h2>
                </div>
            </div>
        </div>
    )
}

export default TaskListNumbers