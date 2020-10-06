import React,{useState, useEffect}  from 'react'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import SuccessModal from '../spriteAndClocks/successModal'
import ClockContainer from '../spriteAndClocks/clockContainer'
import {Row, Col, Button,ButtonGroup, Spinner } from 'reactstrap'
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
            setMusic("https://api.soundcloud.com/tracks/311545220")
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
         <div id="victory-screen">
         <ReactPlayer
                            className='react-player'
                            loop= {true}
                            volume= {0.25}
                            width='1px'
                            height='1px'
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
              <SuccessModal divName="quest-success-sprite-modal" sprite={props.sprite} chosenHero={props.chosenHero} link1= {{url:"/main", text: "Back to Main"}}  link2= {{url:"/main/quests/", text: "Tackle Another Quest"} } adventure={true}/>
              </div>
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
                    {/* <Button color="warning" onClick={()=> setStatus("bad")} >you won't see this</Button> */}
                    <Button color="dark" onClick={completeQuest} >Complete Quest</Button>
                    </ButtonGroup>
            </Col>
            <Col  lg={4}>
                <div id="player-wrapper" >
                        <ReactPlayer
                            className='react-player'
                            loop= {true}
                            volume= {0.25}
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
               {!props.tasks ? <h1>Please return to the quest board or create a new quest.</h1> : null}
               <Spinner color="light" />
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
    music: "https://api.soundcloud.com/playlists/300494469",
    chosenHero: {"id":156,"user_id":294,"hero_id":252,"name":"Elfberto","reputation":34,"flavor":{"trait":"I am always willing to act in accordance with the financial incentive offered. Also, I can't think of anything to look forward to.","bond":"I face danger and evil to offset an unredeemable act in my past.","flaw":"There's no room for caution in a life lived to the fullest."}},
    tasks: [{"id":445,"user_id":294,"title":"Call Out For A Hero ","description":"Welcome to Calling Out For A Hero. After you have called out to a hero Go to the Hall of Quests and register a new quest. Schedule it for whenever you want and build up your reputation.","date":"2020-10-01","completed?":false,"created_at":"2020-10-01T19:44:53.992Z","updated_at":"2020-10-01T19:44:53.992Z","flavor":"A sage named Criphreusim seeks a company of adventurers to rescue the elven town of Lechy from Shaka the Lich Tyrant."},{"id":448,"user_id":294,"title":"Call Out For A Hero ","description":"Welcome to Calling Out For A Hero. After you have called out to a hero Go to the Hall of Quests and register a new quest. Schedule it for whenever you want and build up your reputation.","date":"2020-10-01","completed?":true,"created_at":"2020-10-01T19:44:54.013Z","updated_at":"2020-10-01T19:44:54.013Z","flavor":"An elven lady named Bruocha seeks a company of adventurers to thwart the monstrous plan of Sisigoia the Unspeakable. However, her information is completely wrong."}],
    sprite: 
    {"width":204.2,"height":148.33333333,"steps":10,"url":"http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBhUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eadd794c0b5712b4920d59e5ff4b78efc1782f9a/elf%201.png"}



}




