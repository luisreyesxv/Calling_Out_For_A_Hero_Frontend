import React,{useState, useEffect}  from 'react'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import SuccessModal from '../spriteAndClocks/successModal'
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
    
    const quest =  props.tasks.find(taskObj=> taskObj.id === parseInt(props.match.params.id ))
    const [status, setStatus] = useState("active");
    const [heroBehavior, setHeroBehavior] = useState("running");
    const [enemy,setEnemy]= useState(monsters[Math.round(Math.random())])
    const [music, setMusic] = useState(props.music);
    const [background, setBackground] = useState(Math.floor(Math.random() * 6) + 1);
    const [modalOn,setModalOn] =useState(false)

    useEffect(() => {
        setModalOn(true);
      }, [quest])


    const punishHero = ()=>{
        if( props.chosenHero.reputation >=0 ){
        const penalty = 10
        const playerReputation = props.chosenHero.reputation -penalty >0 ? props.chosenHero.reputation- penalty: 0
        const body= {reputation: playerReputation}
        props.patchChosenHero(body,props.chosenHero.id)}

    }

    const completeQuest =() =>{
        

        if(!quest["completed?"]){
            setModalOn(true)
            props.patchTask({["completed?"]: true},quest.id)
        }

    }
    
    const changingHeroAction=(command)=>{ 
        setHeroBehavior(command)
    }

    
    
    const loadingOrRender =()=>{
        return (quest) ? (
            <div id="adventure-page">
      
         {modalOn && quest["completed?"] ?  
              <SuccessModal divName="quest-success-sprite-modal" sprite={props.sprite} chosenHero={props.chosenHero} link1= {{url:"/main", text: "Back to Main"}}  link2= {{url:"/main/quests/", text: "Tackle Another Quest"} } adventure={true}/>
                :
                <>
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
                    {status==="bad" ? <Button color="info" onClick={()=>{ setMusic(props.music); setStatus("break")}} >Take A Break</Button> : null}
                    {status==="break" || status==="bad" ? <Button color="success" onClick={()=> {setMusic(props.music); setStatus("active")}} >Get Active</Button> : null}
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
        </>}
        </div>
        )
        :
        <div id="loadingScreen" >
            <h1> Loading... </h1>
               {props.tasks ? <h2>Please return to the quest board or create a new quest.</h2> : null}
            <img src="https://i.gifer.com/4V0b.gif" />
        </div>
    }


    const activeFunction = () =>{
        console.log("I'm what happens when this goes active")
        setMusic("https://api.soundcloud.com/tracks/609143430")
        setStatus("bad")
    }

    const breakFunction = () =>{
        console.log("I'm what happens when this goes creak")
        setStatus("bad")
    }

    const badFunction = () =>{
        console.log("I'm what happens when this is bad")
        punishHero()
        setMusic("https://api.soundcloud.com/tracks/609143430")

    }



    return(
        loadingOrRender()

    )

}





export default AdventureContainer

AdventureContainer.defaultProps ={
    music: "https://api.soundcloud.com/playlists/300494469"
}