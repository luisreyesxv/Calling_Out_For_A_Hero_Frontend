import React from 'react'
import { Link } from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import { Container, Row, Col, Button} from 'reactstrap'



class COFAHContainer extends React.Component{
    constructor(){
        super()
        this.state={
            randomButton: false,
            quizButton: false,
            spotifyButton: false
                                                                              
        
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
            
            console.log("this is inside cofah", chosenhero)
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
                            <Button onClick={()=>this.callHero()} color="warning" >DESPERATELY CALLING OUT FOR A HERO!</Button>
                        </Col>
                        <Col md="3">
                            <Button  disabled ={true} color="success" >Calling Out For A Hero based on quiz</Button>
                        </Col>
                        <Col md="3">
                            <Button  disabled ={true} color="danger" >Calling Out For A Hero based on Spotify</Button>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row className="row justify-content-between">
                        <Col md="5">
                            <p> Placeholder for chosen hero</p>
                        </Col>
                        <Col md="5">
                        <p> Placeholder something else</p>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
export default COFAHContainer