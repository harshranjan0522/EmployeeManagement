import React from "react";
import './Tasklist.css'
import Accepted from '../tasks/Accepted'
import New from "../tasks/New";
import Completed from "../tasks/Completed";
import Failed from "../tasks/Failed";

const Tasklist = ({data}) => {

    return(
        <div className="container-tasklist" >
            
            <div id='parent' className="parent">
                {data.tasks.map((elem, idx)=>{
                    if(elem.active){
                        return <Accepted key={idx} data={elem}/>
                    }
                    if(elem.newTask){
                        return <New key={idx} data={elem}/>
                    }
                    if(elem.completed){
                        return <Completed key={idx} data={elem}/>
                    }
                    if(elem.failed){
                        return <Failed key={idx} data={elem}/>
                    }
                })}
            </div>
            
        </div>
    )
}

export default Tasklist