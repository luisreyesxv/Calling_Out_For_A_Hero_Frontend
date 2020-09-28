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
                        <Col md="3">
                            <Button disabled= {this.state.randomButton} onClick={()=>this.callHero()} color="warning" >DESPERATELY CALLING OUT FOR A HERO!</Button>
                        </Col>
                        <Col md="3">
                            <Button  disabled ={this.state.quizButton} color="success" >Calling Out For A Hero based on quiz</Button>
                        </Col>
                        <Col md="3">
                            <Button  disabled ={this.state.spotifyButton} color="danger" >Calling Out For A Hero based on Spotify</Button>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row className="row justify-content-between featured-quests-container" id="COFAH-page-bottom-row">
                        <Col md="3"  id="COFAH-page-hero">
                            {this.props.sprite ? 
                            <>
                            <h3> {this.props.chosenHero.name} Has Answered The Call!</h3>
                            <SpriteContainer key="mainChosenHero" {...this.props.sprite} />
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

// COFAHContainer.defaultProps={
//     sprite: {"url":"http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBUZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--95dd3270b0017b1804c743a45f264301620f763a/elf%201.png","width":816.8,"height":593.5}
// }