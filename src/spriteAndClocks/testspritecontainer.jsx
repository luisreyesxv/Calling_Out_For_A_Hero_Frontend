import React,{useState,useEffect} from 'react'
import Spritesheet from 'react-responsive-spritesheet';

const SpriteContainer =(props)=>{
    
    const [behavior, setBehavior] = useState(props.status);
    const [location, setLocation] = useState(0);
    
    useEffect(() => {
        console.log( props.status)
        
        setBehavior(props.status)
    })

    const actions ={
        idle: {
            start:1,
            end: (props.steps)},
        attack: {
            start: (props.steps+1),
            end: (2* props.steps)},
        running: {
            start: (3* props.steps+1),
            end: (4* props.steps)},
        enemy: {
            start: (3* props.steps+1),
            end: (4* props.steps)}

    }

    const onMouseEnter = {
        idle:  (sprite)=> {
            sprite.goToAndPlay((2* props.steps + 1))
            sprite.setStartAt((2* props.steps + 1))
            sprite.setEndAt((3* props.steps ))
            }
            ,

        attack: (sprite)=> {
            sprite.goToAndPlay((5* props.steps + 1))
            sprite.setStartAt((5* props.steps + 1))
            sprite.setEndAt((6* props.steps ))
            }
            ,
        running: ()=> null,

        enemy: ()=>null

    }
// this is what the onMouseLeave Function shoudl ook like if I want to make it different depending on who is there, but right now.I can only think to keep it the same, just return it to normal
    // const onMouseLeave = {
    //     idle:  (sprite)=> {
    //         sprite.goToAndPlay(actions[behavior].start)
    //         sprite.setStartAt(actions[behavior].start)
    //         sprite.setEndAt(actions[behavior].end)
    //         }
    //         ,

    //     attack: {
    //         start:11,
    //         end: 20}

    // }

    const onMouseLeave = (sprite)=> {sprite.goToAndPlay(actions[behavior].start)
                sprite.setStartAt(actions[behavior].start)
                sprite.setEndAt(actions[behavior].end)
    }


    
    const onLoopComplete = {
        idle:  ()=> null
        ,
        attack:  ()=> null
        ,
        running:  ()=> null
        ,
        enemy:  ()=> {
            
            // setLocation(determiningLocation())
        }
        

    }

    
    const determiningLocation=()=>{
        if( location >=60){
            setBehavior("attack")
        props.changeHero("idle")
        }
        return location <60 ? location+60 : 0
    }



    return(
        <div id={props.divName} style={{right:(location.toFixed(2)+"%")}}>
            <Spritesheet
            className= {props.styling}
            image= {props.url}
            widthFrame= {props.width}
            heightFrame= {props.height}
            fps= {behavior==="enemy"?50:15}
            direction="forward"
            startAt={actions[behavior].start}
            endAt={actions[behavior].end}
            loop={true}
            isResponsive={true}
            onMouseEnter= {onMouseEnter[behavior]}
            onMouseLeave= {onMouseLeave}
            onLoopComplete= {onLoopComplete[behavior]}
            key = {props.divName}
            />
    </div>


    )
}



export default SpriteContainer

SpriteContainer.defaultProps ={
    status: "idle",
    styling: "sprite",
    divName:  "hero-avatar-container"
}