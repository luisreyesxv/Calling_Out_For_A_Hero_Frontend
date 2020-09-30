import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import Bio, {BioStats,BioEmpty} from '../COFAH/bioComponent'
import PlaylistSelector from './playlistSelector'

import FeaturedQuestCarousel from '../Tasks/featuredQuestCarousel'



class MainPage extends React.Component{
    



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
                
            <SpriteContainer key="mainChosenHero" {...this.props.sprite} divName="main-avatar-container" />
            <img id="podium" alt="podium" src="/images/podium.png" />
        </>
    )
    }

    render(){
        return(
            <Container >
                <FeaturedQuestCarousel tasks={this.props.tasks} patchTask={this.props.patchTask} first={!this.props.chosenHero} />
                <Row className="row justify-content-center"  noGutters={false}>
                   {/* <h5> The Sounds of Pomodoria</h5> */}
                    <PlaylistSelector addPlaylist={this.props.addPlaylist}/>
                </Row>
                <Row className="row justify-content-center"  noGutters={false}>
                    <Col xs={10} sm={4} md={2} xl={2}  >
                        
                        {this.spriteOrButton()}
                    </Col>
                    <Col  sm={8} md={10} xl={10} > 
                        
                        {this.props.chosenHero ? <BioStats {...this.props.chosenHero} numberOfTasks={this.props.tasks.length} /> : <BioEmpty />}
                        {/* <TaskList  tasks={this.props.tasks} patchTask={this.props.patchTask} /> */}
                    </Col >
                   
                </Row>
            </Container>
        )
    }
}



export default MainPage