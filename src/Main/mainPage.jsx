import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button,Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap'
import Spritesheet from 'react-responsive-spritesheet';
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import TaskList from '../Tasks/TaskList'
import FeaturedQuestCarousel from '../Tasks/featuredQuestCarousel'


class MainPage extends React.Component{
    constructor(){
        super()
        this.state={
            tasks: []
        }
    }

    spriteOrButton=()=>{
      return !this.props.sprite ?
      
      (<Link to="/cofah" >
          <div style={{background:"purple", height: "200px", textAlign: "center"}} >
            <Button span={3} color="warning" >Call Out For A Hero!</Button>
            </div>
        </Link>)
       :
       (<>
            {/* <Spritesheet
                image= {this.props.sprite.url}
                widthFrame= {this.props.sprite.width}
                heightFrame= {this.props.sprite.height}
                fps= {15}
                direction="forward"
                startAt={1}
                endAt={9}
                loop={true}
                isResponsive={true}
            /> */}
            <SpriteContainer key="mainChosenHero" {...this.props.sprite} />
            <img id="podium" alt="podium" src="https://cdn.clipart.email/718c8d7a6b8c56439bce7cd2bc0f932e_stage-transparent-podium-picture-1190297-stage-transparent-podium_600-211.png" />
        </>
    )
    }

    render(){
        return(
            <Container >
                <FeaturedQuestCarousel tasks={this.props.tasks} patchTask={this.props.patchTask} />
                
                <Row className="row justify-content-between" id="main-page-hero"  noGutters={false}>
                    <Col md={3} style={{background:"red"}} >
                        <Link to="/cofah" >
                            <h1> current hero?</h1>
                        </Link>
                        {this.spriteOrButton()}
                    </Col>
                    <Col  md={4} style={{background:"purple"}}> 
                        <h1> Placeholder for List of Tasks </h1>
                        {/* <TaskList  tasks={this.props.tasks} patchTask={this.props.patchTask} /> */}
                    </Col >
                    <Col md={3} style={{background:"orange"}} >
                        <h1>Placeholder for spotify player</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}



export default MainPage