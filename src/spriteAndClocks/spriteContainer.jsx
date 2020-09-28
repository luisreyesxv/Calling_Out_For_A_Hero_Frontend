import React,{useState,useEffect} from 'react'
import Spritesheet from 'react-responsive-spritesheet';

class SpriteContainer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            behavior: props.status,
            location: 0
        }
    }
    
    
    
    

    actions ={
        idle: {
            start:1,
            end: (this.props.steps)},
        attack: {
            start: (this.props.steps+1),
            end: (2* this.props.steps)},
        running: {
            start: (3* this.props.steps+1),
            end: (4* this.props.steps)},
        enemy: {
            start: (3* this.props.steps+1),
            end: (4* this.props.steps)}

    }

    onMouseEnter = {
        idle:  (sprite)=> {
            sprite.goToAndPlay((2* this.props.steps + 1))
            sprite.setStartAt((2* this.props.steps + 1))
            sprite.setEndAt((3* this.props.steps ))
            }
            ,

        attack: (sprite)=> {
            sprite.goToAndPlay((5* this.props.steps + 1))
            sprite.setStartAt((5* this.props.steps + 1))
            sprite.setEndAt((6* this.props.steps ))
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

     onMouseLeave = (sprite)=> {sprite.goToAndPlay(this.actions[this.state.behavior].start)
                sprite.setStartAt(this.actions[this.state.behavior].start)
                sprite.setEndAt(this.actions[this.state.behavior].end)
    }


    
    onLoopComplete = {
        idle:  ()=> null
        ,
        attack:  ()=> {
            
                this.spritesheeInstance.goToAndPlay((this.actions[this.state.behavior].start))
                this.spritesheeInstance.setStartAt((this.actions[this.state.behavior].start))
                this.spritesheeInstance.setEndAt((this.actions[this.state.behavior].end))
            
        }
        ,
        running:  ()=> console.log("done")
        ,
        enemy:  ()=> {
            
            this.determiningLocation()
        }
        

    }

    
    determiningLocation=()=>{
        if( this.state.location >=55){
            this.props.changeHero("attack")
            this.spritesheeInstance.goToAndPlay(51)
            this.spritesheeInstance.setStartAt(51)
            this.spritesheeInstance.setEndAt(60)
        }
        
        if( this.state.location >=60){
            this.props.changeHero("running")
            this.spritesheeInstance.goToAndPlay((this.actions[this.state.behavior].start))
            this.spritesheeInstance.setStartAt((this.actions[this.state.behavior].start))
            this.spritesheeInstance.setEndAt((this.actions[this.state.behavior].end))
        }
        const newLocation = this.state.location <60 ? this.state.location+5: 0
        this.setState({
            ...this.state,
            location:newLocation
        })
    }

    componentDidUpdate(previousProps){
        if (previousProps.status !== this.props.status){
            console.log("this is running from component did update. this is the prevoius props",previousProps.status,this.state.behavior)
            this.setState({
                ...this.state,
                behavior: this.props.status
            },()=>{
                this.spritesheeInstance.goToAndPlay((this.actions[this.state.behavior].start))
                this.spritesheeInstance.setStartAt((this.actions[this.state.behavior].start))
                this.spritesheeInstance.setEndAt((this.actions[this.state.behavior].end))
            })



            
        }
        }


    render(){
    return(
        
        <div id={this.props.divName} style={{right:(this.state.location.toFixed(2)+"%")}}>
            <Spritesheet
            className= {this.props.styling}
            image= {this.props.url}
            widthFrame= {this.props.width}
            heightFrame= {this.props.height}
            fps= {24}
            direction="forward"
            startAt={this.actions[this.state.behavior].start}
            endAt={this.actions[this.state.behavior].end}
            loop={true}
            isResponsive={true}
            onMouseEnter= {this.onMouseEnter[this.state.behavior]}
            onMouseLeave= {this.onMouseLeave}
            onLoopComplete= {this.onLoopComplete[this.state.behavior]}
            key = {this.props.divName}
            getInstance={spritesheet => {
                this.spritesheeInstance = spritesheet;
              }}
            />
    </div>


    )
    }
}



export default SpriteContainer

SpriteContainer.defaultProps ={
    status: "idle",
    styling: "sprite",
    divName:  ""
}