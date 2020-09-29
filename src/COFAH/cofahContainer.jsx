import React from 'react'
import { Link } from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import { Container, Row, Col, Button} from 'reactstrap'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import Bio from './bioComponent'





class COFAHContainer extends React.Component{
    constructor(props){
        super()
        this.state={
            randomButton: !!props.sprite,
            quizButton: true,
            spotifyButton: true
                                                                              
        
        }
    }



    callHero = ( body={method:"random"}) =>{

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': this.props.token
            },
            body: JSON.stringify({chosen_hero: body})
        }

        fetch(this.props.apiUrl + "hire", options)
        .then(response=> response.json())
        .then(chosenhero=> {
            
            // this.setState({...this.state,
            //     randomButton: true})
            this.props.updateChosenHero(chosenhero.sprite,chosenhero.chosen_hero)
            
        })



    }



    render(){
        return(
            <div>
                <h1> Recruit a hero time!!</h1>
                <Container>
                    <Row className="row justify-content-between">
                        <Col md="5">
                            <Button disabled= {this.state.randomButton} onClick={()=>this.callHero()} color="warning" >DESPERATELY CALLING OUT FOR A HERO! IT CAN BE ANYONE</Button>
                        </Col>
                        <Col md="5">
                            <Button  disabled ={this.state.spotifyButton} color="danger" >I MUST CALL OUT FOR A HERO. THIS HOUSE WILL SURELY ANSWER...</Button>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row className="row justify-content-between featured-quests-container" id="COFAH-page-bottom-row">
                        <Col md="3"  id="COFAH-page-hero">
                            {this.props.sprite ? 
                            <>
                            <h3> {this.props.chosenHero.name} Has Answered The Call!</h3>
                            <img src="/images/magic cloud.gif" id="sparkles" />
                            <SpriteContainer key="mainChosenHero" {...this.props.sprite} divName="COFAH-avatar-container"/>
                            {/* <img id="podium" alt="podium" src="/images/podium.png" /> */}
                            </> 
                            :
                            <>
                            <h4>No Hero Has Answered Your Call Yet. Chose from above to Call Out For A Hero!</h4>
                            <img id="question" alt="No Hero Placeholder" src="/images/question.svg" />
                            </>
                            } 
                        </Col>
                        <Col md="5">
                        {this.props.chosenHero ? <Bio {...this.props.chosenHero} /> : <h1>Call Out For A Hero to get your Certified Pomodoria Hero Card Today!</h1>}
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
export default COFAHContainer

COFAHContainer.defaultProps={
    chosenHero:  {"id":97,"user_id":230,"hero_id":237,"name":"Elfberto","reputation":34,"flavor":{"trait":"I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness. Also,I live for the thrill of the hunt.","bond":"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.","flaw":"I have lived a hard life and find it difficult to empathize with others."}},
  sprite: {"url":"http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1084cab903f76d240ad1edba2d24b0d9b3aa9a36/elf%201.png","width":816.8,"height":593.5,"steps":10}}