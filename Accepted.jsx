import React from "react";
import './Accepted.css'

const Accepted = ({data}) => {

    return(
                <div className="tasklist-accepted">
                    <div className="head-card">
                        <h5>{data.category}</h5>
                        <p>{data.taskDate}</p>
                    </div>
                    <div className="body-card">
                        <h5>{data.taskTitle}</h5>
                        <p>{data.taskDescription}</p>
                    </div>
                    <div className="mark">
                        <button className="markcomplete">COMPLETED</button>
                        <button className="markfail">FAILED</button>
                    </div>
                </div>
    )
}

export default Accepted