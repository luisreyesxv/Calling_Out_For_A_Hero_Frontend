import React, {useState} from 'react'
import TaskCard from './TaskCard'
import {
   Button, CardColumns, Modal, ModalHeader, ModalBody, ModalFooter ,
   InputGroup, InputGroupAddon, InputGroupText, Input
  } from 'reactstrap';


const TaskList =(props)=>{

    const displayCards = () =>{
       
     return props.tasks.map(taskObj =>  <TaskCard key={taskObj.id} {...taskObj} patchHandler={props.patchTask} />)
    }


    return(
        <div  >
                <h1> List of all tasks</h1>
                
                <CardColumns>
            
                    {displayCards()}
           
                </CardColumns>

        </div>

    )



}

export default TaskList