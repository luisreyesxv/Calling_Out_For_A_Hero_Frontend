import React from 'react'
import TaskCard from './TaskCard'
import { CardDeck} from 'reactstrap';


const TaskList =(props)=>{

    const displayCards = () =>{
       
     return props.tasks.map(taskObj =>  <TaskCard key={taskObj.id} {...taskObj} patchHandler={props.patchTask} />)
    }


    return(
        <div  >
                <h1> List of all tasks</h1>
                
                <CardDeck>
            
                    {displayCards()}
           
                </CardDeck>

        </div>

    )



}

export default TaskList