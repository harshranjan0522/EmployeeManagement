import React from "react";
import './New.css'

const New = ({data}) => {

    return(
                <div className="tasklist-new">
                    <div className="head-card">
                        <h5>{data.category}</h5>
                        <p>{data.taskDate}</p>
                    </div>
                    <div className="body-card">
                        <h5>{data.taskTitle}</h5>
                        <p>{data.taskDescription}</p>
                    </div>
                    <div className="mark">
                        <button className="accepttask">ACCEPT TASK</button>
                        
                    </div>
                </div>
    )
}

export default New