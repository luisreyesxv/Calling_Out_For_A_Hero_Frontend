import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import Bio from '../COFAH/bioComponent'
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
            <SpriteContainer key="mainChosenHero" {...this.props.sprite} />
            <img id="podium" alt="podium" src="/images/podium.png" />
        </>
    )
    }

    render(){
        return(
            <Container >
                <FeaturedQuestCarousel tasks={this.props.tasks} patchTask={this.props.patchTask} />
                
                <Row className="row justify-content-between" id="main-page-hero"  noGutters={false}>
                    <Col  sm={4} md={4} xl={4}  >
                        <Link to="/cofah" >
                            <h1> current hero?</h1>
                        </Link>
                        {this.spriteOrButton()}
                    </Col>
                    <Col  sm={4} md={4} xl={4} > 
                        <h4>Certified Pomodoria Hero Card</h4>
                        {this.props.chosenHero ? <Bio {...this.props.chosenHero} /> : <h1>Call Out For A Hero to get your Certified Pomodoria Hero Card Today!</h1>}
                        {/* <TaskList  tasks={this.props.tasks} patchTask={this.props.patchTask} /> */}
                    </Col >
                    <Col sm={3} md={4} xl={4} style={{background:"orange"}} >
                        <h1>Placeholder for spotify player</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}



export default MainPage