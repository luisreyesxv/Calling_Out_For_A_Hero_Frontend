import React from 'react'
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
            end: (4* this.props.steps)},
        demoHero: {
            start: (3* this.props.steps+1),
            end: (4* this.props.steps)},
        demoEnemy: {
            start: ( 1),
            end: (2* this.props.steps)},
        shopper: {
            start:1,
            end: (this.props.steps)},
        cofah: {
            start: (3* this.props.steps+1),
            end: (4* this.props.steps)},
        rescue: {
            start:1,
            end: (this.props.steps)},

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

        enemy: ()=>null,

        demoHero:  (sprite)=> {
            sprite.goToAndPlay((1* this.props.steps + 1))
            sprite.setStartAt((1* this.props.steps + 1))
            sprite.setEndAt((2* this.props.steps ))
            },
        demoEnemy:  (sprite)=> {
            sprite.goToAndPlay((1* this.props.steps + 1))
            sprite.setStartAt((1* this.props.steps + 1))
            sprite.setEndAt((3* this.props.steps ))
            },
        shopper: ()=>null,
        cofah: ()=>null,
        rescue: ()=> null

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

     onMouseLeave = (sprite)=> {

       if(this.props.status !=="cofah" && this.props.status !=="rescue") {  
        sprite.goToAndPlay(this.actions[this.state.behavior].start);
        sprite.setStartAt(this.actions[this.state.behavior].start);
        this.spritesheetInstance.setEndAt(this.actions[this.state.behavior].end);
    }
            
    }

    


    
    onLoopComplete = {
        idle:  ()=> null
        ,
        attack:  ()=> {
            
                this.spritesheetInstance.goToAndPlay((this.actions[this.state.behavior].start))
                this.spritesheetInstance.setStartAt((this.actions[this.state.behavior].start))
                this.spritesheetInstance.setEndAt((this.actions[this.state.behavior].end))
            
        }
        ,
        running:  null
        ,
        enemy:  ()=> {
            
            this.determiningLocation()
        },
        demoHero:  null,
        demoEnemy:  null,
        shopper:  null,
        cofah: ()=> {
            
            this.cofahrun()
        },
        rescue:  null
        

    }

    cofahrun =()=>{
        if( this.state.location >=40){
            this.spritesheetInstance.goToAndPlay(21)
            this.spritesheetInstance.setStartAt(21)
            this.spritesheetInstance.setEndAt(30)
        }
        if (this.state.location <40){
        const newLocation = this.state.location <60 ? this.state.location+10: 0
        this.setState({
            ...this.state,
            location:newLocation
            })
        }
    }
    
    determiningLocation=()=>{
        if( this.state.location >=55){
            this.props.changeHero("attack")
            this.spritesheetInstance.goToAndPlay(51)
            this.spritesheetInstance.setStartAt(51)
            this.spritesheetInstance.setEndAt(60)
        }
        
        if( this.state.location >=60){
            this.props.changeHero("running")
            this.spritesheetInstance.goToAndPlay((this.actions[this.state.behavior].start))
            this.spritesheetInstance.setStartAt((this.actions[this.state.behavior].start))
            this.spritesheetInstance.setEndAt((this.actions[this.state.behavior].end))
        }
        const newLocation = this.state.location <60 ? this.state.location+5: 0
        this.setState({
            ...this.state,
            location:newLocation
        })
    }

    componentDidUpdate(previousProps){
        if (previousProps.status !== this.props.status){
            this.setState({
                ...this.state,
                behavior: this.props.status
            },()=>{
                this.spritesheetInstance.goToAndPlay((this.actions[this.state.behavior].start))
                this.spritesheetInstance.setStartAt((this.actions[this.state.behavior].start))
                this.spritesheetInstance.setEndAt((this.actions[this.state.behavior].end))
            })



            
        }
        }


    render(){
    return(
        
        <div id={this.props.divName} style={{[this.state.behavior==="cofah" ? "left" : "right"]:(this.state.location.toFixed(2)+"%")}}>
            <Spritesheet
            className= {this.props.styling}
            image= {this.props.url}
            widthFrame= {this.props.width}
            heightFrame= {this.props.height}
            fps= {this.props.status==="enemy"? 35: 22}
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
                this.spritesheetInstance = spritesheet;
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