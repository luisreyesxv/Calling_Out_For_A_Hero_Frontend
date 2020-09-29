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
          <div id="main-page-cofah-container" >
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
                    <Col sm={3} md={4} xl={3} >
                {/* example of playlist */}
                <iframe width="100%" height="300" scrolling="yes" frameborder="no" allow="autoplay" autoplay="1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/260939434&auto_play=true"></iframe>

                        {/* example of solo track */}
                    {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" autoplay="1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195694654&auto_play=true"></iframe> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}



export default MainPage