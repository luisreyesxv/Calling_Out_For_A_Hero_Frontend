import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import Bio, {BioStats,BioEmpty} from '../COFAH/bioComponent'
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
          <div style={{ textAlign: "center"}} >
            <Button  color="warning" >Call Out For A Hero!</Button>
            <img id="question" alt="No Hero Placeholder" src="/images/question.svg" />
            </div>
        </Link>)
       :
       (<>
                <Link to="/cofah" >
                            <h1>Check Hero's Profile</h1>
                    </Link>
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
                    <Col xs={10} sm={4} md={4} xl={3}  >
                        
                        {this.spriteOrButton()}
                    </Col>
                    <Col  sm={4} md={4} xl={3} > 
                        
                        {this.props.chosenHero ? <BioStats {...this.props.chosenHero} numberOfTasks={this.props.tasks.length} /> : <BioEmpty />}
                        {/* <TaskList  tasks={this.props.tasks} patchTask={this.props.patchTask} /> */}
                    </Col >
                    <Col sm={3} md={4} xl={3} style={{background:"orange"}} >
                        <h1>Placeholder for spotify player</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}



export default MainPage