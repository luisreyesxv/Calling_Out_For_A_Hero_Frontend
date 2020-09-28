import React,{useState}  from 'react'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import ClockContainer from '../spriteAndClocks/clockContainer'
import { Container, Row, Col, Button,ButtonGroup, Jumbotron } from 'reactstrap'
import TaskMedia from '../Tasks/taskMediaComponent'


 class AdventureContainer extends React.Component{
    constructor(){
        super()
         
         this.state ={
            status:"active",
            heroBehavior : "attack"
         }
     }
     
    quest =  this.props.tasks.find(taskObj=> taskObj.id === parseInt(this.props.match.params.id))



     punishHero = ()=>{
        if( this.props.chosenHero.reputation <=0 ){
        const penalty = 10
        const playerReputation = this.props.chosenHero.reputation -penalty >0 ? this.props.chosenHero.reputation- penalty: 0
        const body= {reputation: playerReputation}


        console.log("this is the player's new reputation that will be sent to patch method", body)

        this.props.patchChosenHero(body,this.props.chosenHero.id)}

    }

    completeQuest =() =>{
        
       !this.quest["completed?"] ? this.props.patchTask({["completed?"]: true},this.quest.id) : console.log("this already completed")
    }
    
    changingHeroAction=(command)=>{
        this.setState({
            ...this.state,
            heroBehavior: command})
    }


    
    loadingOrRender =()=>{
        return this.quest ? (
            <>
        {/* <h1> This is the Adventure Container</h1>
        <h3>Inside is the following quest</h3>
        <h4> {`Param ID = ${this.props.match.params.id}`}</h4> 
        <h4> {`Item was found? = ${!!this.quest}`}</h4> 
        { this.quest ? <h4> {`Item title is  = ${this.quest.title}`}</h4> : "loading" } 
        {this.props.chosenHero? <h4> ChosenHero's reputation is {this.props.chosenHero.reputation}</h4> : null} */}


        <Row className="row justify-content-between" style={{marginTop: "10px"}}>
            <Col style={{textAlign:"center"}} lg={4}>
                <ClockContainer key={this.state.status} status={this.state.status}  active={this.activeFunction} break={this.breakFunction} bad={this.badFunction} />
                <ButtonGroup style={{textAlign:"center"}}>
                    {this.state.status==="bad" ? <Button color="info" onClick={this.breakFunction} >Take A Break</Button> : null}
                    {this.state.status==="break" || this.state.status==="bad" ? <Button color="success" onClick={this.activeFunction} >Get Active</Button> : null}
                    <Button color="warning" onClick={this.breakFunction} >you won't see this</Button>
                    <Button color="secondary" onClick={this.completeQuest} >Complete Quest</Button>
                    </ButtonGroup>
            </Col>
            <Col style={{background:"red"}} lg={2}>
                <h2>Player</h2> 
            
                <Button color="secondary" onClick={this.completeQuest} >Complete Task</Button>
                <iframe width="100%" height="100" scrolling="yes" frameborder="no" allow="autoplay" autoplay="1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/260939434&auto_play=true"></iframe>

            </Col>
            <Col xl={5} >
                
                <TaskMedia key={this.quest.id} {...this.quest} patchHandler={""} />
            </Col>
        </Row>
        <Row className="row justify-content-between" style={{marginTop: "10px", height:"25px"}}>
            <Col  xl={12} id="adventure-sprite-jumbotron">
                <Row>
                  
                        <SpriteContainer key="mainChosenHero" {...this.props.sprite} status={this.state.heroBehavior} divName= "hero-avatar-container"/>
                   
                        <SpriteContainer key="enemyOrc" url="/images/enemies/1.png" width={531} height= {357.5}  steps={10} status= "enemy" divName= "enemy-avatar-container" changeHero={this.changingHeroAction} />
                    </Row>
            </Col>
        </Row>

        </>
        )
        :
        <h1> We are unable to load this quest. It is either because the quest does not exist or It has been completed. Please return to the quest board or create a new quest.</h1>

    }


     activeFunction = () =>{
        console.log("I'm what happens when this goes active")
        this.setStatus("bad")
    }

     breakFunction = () =>{
        console.log("I'm what happens when this goes creak")
        this.setStatus("bad")
    }

    badFunction = () =>{
        console.log("I'm what happens when this is bad")
        this.punishHero()
        this.setStatus("active")
    }


    render(){
    return(
        this.loadingOrRender()

    )
    }

}





export default AdventureContainer

AdventureContainer.defaultProps={
    match:{
        ["params"]: {id: "1"}
    },
    tasks: [{title: "test",
    description: "test",
    id: 1
    }]
}