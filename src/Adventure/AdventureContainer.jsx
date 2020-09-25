import React from 'react'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import ReactCountdownClock from 'react-countdown-clock'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import TaskMedia from '../Tasks/taskMediaComponent'

const AdventureContainer = (props) => {
    const quest =  props.tasks.find(taskObj=> taskObj.id === parseInt(props.match.params.id))
    console.dir(props.match.params)




    return(
        <>
        <h1> This is the Adventure Container</h1>
        <h3>Inside is the following quest</h3>
        <h4> {`Param ID = ${props.match.params.id}`}</h4> 
        <h4> {`Item was found? = ${!!quest}`}</h4> 
        { quest ? <h4> {`Item title is  = ${quest.title}`}</h4> : "loading" } 

        <Row className="row justify-content-between">
            <Col style={{background:"purple"}} xl={4}>
                <ReactCountdownClock seconds={5*60}
                     color="yellow"
                     alpha={1}
                     size={300}
                     weight={25}
                    //  onComplete={myCallback} />
                    />
            </Col>
            <Col style={{background:"red"}} xl={2}>
                <h2>placeholder for some buttons</h2> 
            </Col>
            <Col xl={5} >
                <h1>place holder for current quest</h1> 
                <TaskMedia key={quest.id} {...quest} patchHandler={""} />
            </Col>
        </Row>
        <Row className="row justify-content-between">
            <Col style={{background:"orange"}} xl={12}>
                <Jumbotron style={{background:"blue"}}>
                    <h1>this is where we display the avatars</h1> 
                </Jumbotron>
            </Col>
        </Row>

        </>

    )

}

export default AdventureContainer

AdventureContainer.defaultProps ={
    match:{
        ["params"]: {id: "1"}
    },
    tasks: [{title: "test",
    description: "test",
    id: 1
    }]
}