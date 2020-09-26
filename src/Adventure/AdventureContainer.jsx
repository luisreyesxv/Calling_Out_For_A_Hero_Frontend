import React,{useState}  from 'react'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import ClockContainer from '../spriteAndClocks/clockContainer'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import TaskMedia from '../Tasks/taskMediaComponent'

const AdventureContainer = (props) => {
    const quest =  props.tasks.find(taskObj=> taskObj.id === parseInt(props.match.params.id))
    const [status, setStatus] = useState("active");


    const punishHero = ()=>{
        if( props.chosenHero.reputation <=0 ){
        const penalty = 10
        const playerReputation = props.chosenHero.reputation -penalty >0 ? props.chosenHero.reputation- penalty: 0
        const body= {reputation: playerReputation}


        console.log("this is the player's new reputation that will be sent to patch method", body)

        props.patchChosenHero(body,props.chosenHero.id)}

    }

    const completeQuest =() =>{
        
       !quest["completed?"] ? props.patchTask({["completed?"]: true},quest.id) : console.log("this already completed")
    }
    


    
    const loadingOrRender =()=>{
        return quest ? (
            <>
        <h1> This is the Adventure Container</h1>
        <h3>Inside is the following quest</h3>
        <h4> {`Param ID = ${props.match.params.id}`}</h4> 
        <h4> {`Item was found? = ${!!quest}`}</h4> 
        { quest ? <h4> {`Item title is  = ${quest.title}`}</h4> : "loading" } 
        {props.chosenHero? <h4> ChosenHero's reputation is {props.chosenHero.reputation}</h4> : null}


        <Row >
            <Col  lg={4}>
                <ClockContainer key={status} status={status}  active={activeFunction} break={breakFunction} bad={badFunction} />
            </Col>
            <Col style={{background:"red"}} lg={2}>
                <h2>placeholder for some buttons</h2> 
                <Button color="primary" onClick={completeQuest} >This makes the timer go on break</Button>
                <Button color="success" onClick={()=> setStatus("active")} >This makes the timer go on active</Button>
                <Button color="warning" onClick={()=> setStatus("bad")} >This makes the timer go complete</Button>
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
        :
        <h1> We are unable to load this quest. It is either because the quest does not exist or It has been completed. Please return to the quest board or create a new quest.</h1>

    }


    const activeFunction = () =>{
        console.log("I'm what happens when this goes active")
        setStatus("bad")
    }

    const breakFunction = () =>{
        console.log("I'm what happens when this goes creak")
        setStatus("bad")
    }

    const badFunction = () =>{
        console.log("I'm what happens when this is bad")
        punishHero()
        setStatus("active")
    }



    return(
        loadingOrRender()

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