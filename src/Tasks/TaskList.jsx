import React from 'react'
import TaskCard from './TaskCard'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, CardImgOverlay, CardDeck, CardColumns
  } from 'reactstrap';


const TaskList =(props)=>{
 
    
    const displayCards = () =>{
       
     return props.tasks.map(taskObj =>  <TaskCard key={taskObj.id} {...taskObj} />)
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