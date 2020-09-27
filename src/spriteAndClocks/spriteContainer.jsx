import React,{useState} from 'react'
import Spritesheet from 'react-responsive-spritesheet';

const SpriteContainer =(props)=>{
   
    const [behavior, setBehavior] = useState(props.status);

    const actions ={
        idle: {
            start:1,
            end: (props.steps)},
        attack: {
            start: (props.steps+1),
            end: (2* props.steps)}

    }

    const onMouseEnter = {
        idle:  (sprite)=> {
            sprite.goToAndPlay((2* props.steps + 1))
            sprite.setStartAt((2* props.steps + 1))
            sprite.setEndAt((3* props.steps ))
            }
            ,

        attack: {
            start:11,
            end: 20}

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


    return(

        <Spritesheet
        className= "sprite"
        image= {props.url}
        widthFrame= {props.width}
        heightFrame= {props.height}
        fps= {20}
        direction="forward"
        startAt={actions[behavior].start}
        endAt={actions[behavior].end}
        loop={true}
        isResponsive={true}
        onMouseEnter= {onMouseEnter["idle"]}
        onMouseLeave= {onMouseLeave}
    />


    )
}

export default SpriteContainer

SpriteContainer.defaultProps ={
    status: "idle"
}