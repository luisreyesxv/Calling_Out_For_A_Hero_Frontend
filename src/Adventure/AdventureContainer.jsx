import React,{useState}  from 'react'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import ClockContainer from '../spriteAndClocks/clockContainer'
import {Row, Col, Button,ButtonGroup } from 'reactstrap'
import TaskMedia from '../Tasks/taskMediaComponent'
import ReactPlayer from 'react-player/soundcloud'


const AdventureContainer = (props) => {
    const monsters = [ 
        {url:"/images/enemies/1.png",
        width:531, 
        height: 357.5, 
         steps:10 },
         { url:"/images/enemies/2.png", width:545, height:(388),  steps:10 }]
    
    const quest =  props.tasks.find(taskObj=> taskObj.id === parseInt(props.match.params.id))
    const [status, setStatus] = useState("active");
    const [heroBehavior, setHeroBehavior] = useState("running");
    const [enemy,setEnemy]= useState(monsters[Math.round(Math.random())])
    const [music, setMusic] = useState(props.music);
    const [background, setBackground] = useState(Math.floor(Math.random() * 8) + 1);


    const punishHero = ()=>{
        if( props.chosenHero.reputation >=0 ){
        const penalty = 10
        const playerReputation = props.chosenHero.reputation -penalty >0 ? props.chosenHero.reputation- penalty: 0
        const body= {reputation: playerReputation}


        console.log("this is the player's new reputation that will be sent to patch method", body)

        props.patchChosenHero(body,props.chosenHero.id)}

    }

    const completeQuest =() =>{
        
       !quest["completed?"] ? props.patchTask({["completed?"]: true},quest.id) : console.log("this already completed")
    }
    
    const changingHeroAction=(command)=>{ 
        setHeroBehavior(command)
    }

    
    
    const loadingOrRender =()=>{
        return quest ? (
            <div id="adventure-page">
        {/* <h1> This is the Adventure Container</h1>
        <h3>Inside is the following quest</h3>
        <h4> {`Param ID = ${props.match.params.id}`}</h4> 
        <h4> {`Item was found? = ${!!quest}`}</h4> 
        { quest ? <h4> {`Item title is  = ${quest.title}`}</h4> : "loading" } 
         */}
         {props.chosenHero? <h4> ChosenHero's reputation is {props.chosenHero.reputation}</h4> : null}

<Row className="row justify-content-between " id="adventure-jumbotron-row" >
            <Col  xl={12} id="adventure-sprite-jumbotron" style={{backgroundImage: `url("/images/adventureBackgrounds/${background}.png")`}}>
                <Row>
                  
                        {/* <SpriteContainer key="mainChosenHero" {...props.sprite} status={heroBehavior} divName= "hero-avatar-container"/> */}
                        <SpriteContainer key="mainChosenHero" {...props.sprite} status={heroBehavior} divName= "hero-avatar-container" changeHero={changingHeroAction}/>

                  
                        <SpriteContainer key="enemyOrc" {...enemy} status= "enemy" divName= "enemy-avatar-container" changeHero={changingHeroAction} />
                    </Row>
            </Col>
        </Row>

        <Row className="row justify-content-center" id="adventure-clock-row">
            <Col  lg={4}>
                <ClockContainer key={status} status={status}  active={activeFunction} break={breakFunction} bad={badFunction} />
                <ButtonGroup style={{textAlign:"center"}}>
                    {status==="bad" ? <Button color="info" onClick={()=>setStatus("break")} >Take A Break</Button> : null}
                    {status==="break" || status==="bad" ? <Button color="success" onClick={()=> setStatus("active")} >Get Active</Button> : null}
                    <Button color="warning" onClick={()=> setStatus("bad")} >you won't see this</Button>
                    <Button color="secondary" onClick={completeQuest} >Complete Quest</Button>
                    </ButtonGroup>
            </Col>
            <Col  lg={4}>
                <div id="player-wrapper" >
                        <ReactPlayer
                            className='react-player'
                            loop= {true}
                            width='100%'
                            height='200%'
                            url={music}
                            config={
                                {
                                    soundcloud: {
                                        options: {
                                            auto_play: true,
                                        show_artwork: true,
                                        show_user:false,
                                        start_track: (Math.round(Math.random()*6)+1),
                                        }
                                    }
                                }
                            }
                            />
                    </div>

            </Col>
        </Row>
        <TaskMedia key={quest.id} {...quest} patchHandler={""} />

        </div>
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
    }],
    music: "https://api.soundcloud.com/playlists/300494469"
}