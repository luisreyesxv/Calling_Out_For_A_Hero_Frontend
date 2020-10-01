import React from 'react'
import TaskCard from './TaskCard'
import { CardColumns} from 'reactstrap';


const TaskList =(props)=>{

    const displayCards = () =>{
       
     return props.tasks.sort((a, b) => a.date - b.date).map(taskObj =>  <TaskCard key={taskObj.id} {...taskObj} patchHandler={props.patchTask} />)
    }


    return(
        <div  id="list-of-all-quests">
                <h1> HALL OF RECORDS</h1>
                
                <CardColumns>
            
                    {displayCards()}
           
                </CardColumns>

        </div>

    )



}

export default TaskList