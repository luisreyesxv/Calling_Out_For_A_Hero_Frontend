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

    spriteOrButton=()=>{
      return  this.props.sprite["missing?"] ?
      
      (<Link to="/cofah" >
          <div style={{background:"purple", height: "200px", textAlign: "center"}} >
            <Button span={3} color="warning" >Call Out For A Hero!</Button>
            </div>
        </Link>)
       :
       (<>
            <Spritesheet
                image= {this.props.sprite.url}
                widthFrame= {this.props.sprite.width}
                heightFrame= {this.props.sprite.height}
                fps= {15}
                direction="forward"
                startAt={1}
                endAt={9}
                loop={true}
                isResponsive={true}
            />
            <img id="podium" alt="podium" src="https://cdn.clipart.email/718c8d7a6b8c56439bce7cd2bc0f932e_stage-transparent-podium-picture-1190297-stage-transparent-podium_600-211.png" />
        </>
    )
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
                        <Link to="/cofah" >
                            <h1> current hero?</h1>
                        </Link>
                        {this.spriteOrButton()}
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