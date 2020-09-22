import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button,Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap'
    import Spritesheet from 'react-responsive-spritesheet';


class MainPage extends React.Component{
    constructor(){
        super()
        this.state={
            tasks: []
        }
    }

    render(){
        return(
            <Container >
                <Row fluid style={{"marginTop":"10%"}} className="row justify-content-between"  noGutters={false} >
                    <Col id="task-carousel" fluid md="6" style={{background:"green"}}> 
                        {/* <Carousel >
                            <CarouselItem key="luis">
                                <h2>swag swag swag</h2>
                            </CarouselItem>
                        </Carousel> */}
                        <h1> Placeholder for the task carousel idea</h1>
                        
                        
                        
                        
                    </Col >

                    <Col  fluid md="5" style={{background:"purple"}}> 
                        <h1> Placeholder for List of Tasks </h1>
                    </Col >
                </Row>
                <Row className="row justify-content-between" id="main-page-hero"  noGutters={false}>
                    <Col md="6" style={{background:"red"}} >
                        <h1> current hero?</h1>
                        <Spritesheet
                            image="/images/testknightsprite.png"
                            widthFrame={819.2}
                            heightFrame={338}
                            fps={15}
                            // steps={20} this seems to go counter to endAt. may just want to use startAt and endAt. the possibility for it to be more dynamic
                            direction="forward"
                            startAt={0}
                            endAt={10}
                            loop={true}
                            
                            isResponsive={true}
                        />
                        <img id="podium" alt="podium" src="https://cdn.clipart.email/718c8d7a6b8c56439bce7cd2bc0f932e_stage-transparent-podium-picture-1190297-stage-transparent-podium_600-211.png" />
                    </Col>
                    <Col md="5" style={{background:"orange"}} >
                        <h1>Placeholder for spotify player</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default MainPage