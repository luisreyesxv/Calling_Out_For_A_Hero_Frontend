import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'
// import Banner from './banner'
import SpriteContainer from '../spriteAndClocks/spriteContainer'

const Homepage = () =>{




    return(   
    <div id="Homepage-container">

        <Container >
            <Row  >
                {/* <Banner /> */}
                <Col>
                    <Jumbotron id="home-jumbotron">
                        
                        <div id="homepage-welcome-message">
                                <h1 className="display-4"> Welcome to Calling Out For A Hero</h1>
                                <p>
                                The <strong>Productivity app</strong> & <strong> Pomodoro Timer </strong> designed to help you keep track & accomplish of your personal tasks. Throughout your experience
                                using  <strong> Calling Out For A Hero</strong> , you will experience

                                </p>
                                <Row className="row justify-content-between"  noGutters={false} >
                                    <SpriteContainer key="demoHero" url="/images/HomeFairy.png" width={185} height= {127.166666666666666667}  steps={10} status="cofah" divName="home-avatar-container"/>
                                    <SpriteContainer key="enemyOrc1" url="/images/enemies/1.png" width={531} height= {357.5}  steps={10} status= "cofah" divName="home-avatar-container"/>
                                </Row>
                                <h5>
                                    <ul className="welcome-message-ul" >
                                            <li>Getting your own Personal Hero</li>
                                            <li>Setting Up and Organizing Personal Quests for both you & your Hero to complete</li>
                                            <li>Enjoying music playlists designed to help you get into the zone and complete your tasks in peace</li>
                                            <li>Using a Pomodoro Timer & the Pomodoro Technique to help pace yourself in the real world to make sure you don't burn yourself out</li>
                                            <li>Getting to watch your own <strong>Personal Hero</strong> grow along with you</li> 
                                    </ul> 
                                </h5>
                                
                                <Row className="row justify-content-between"  noGutters={false} >
                                <SpriteContainer key="demoHero2" url="/images/Home%20Knight.png" width={251.40} height={142.166666666666666667}  steps={10} status="cofah" divName="home-avatar-container"/>
                                <SpriteContainer key="enemyOrc2" url="/images/enemies/2.png" width={545} height={388}  steps={10} status= "cofah" divName="home-avatar-container"/>
                                </Row>
                                    
                                    
                                <p>     
                                    Inside <strong>Calling Out For A Hero</strong>, you will find yourself in the world of Pomodoria, which is filled with rival factions. As you go on your own personal quests,
                                    you find yourself getting burned out & looking for help. You reach the local guild hall, where you find yourself  <strong>Calling Out For A Hero</strong>. The call is heard all throughout
                                    Pomodoria, where different heroes come to your aid. As you continue doing your quests, your hero will grow along with you, and there may be a few surprises along the way.
                                    There is no better time than the present for <strong>Calling Out For A Hero</strong>
                                </p>
                        </div>

                        <Row style={{"marginTop":"5"}} className="row justify-content-between"  noGutters={true} >
                                <Col md="4" >
                                    <Link to="/login" >
                                        <Button block style={{background: "#D2691E"}} size="lg">
                                            Log In
                                        </Button>
                                    </Link>
                                </Col>
                                <Col md="4"  > 
                                    <Link to="/register" >
                                        <Button block style={{background: "#D2691E"}} size="lg">
                                            Register New Account
                                        </Button>
                                    </Link>
                                </Col>
                        </Row>
                     </Jumbotron>
                </Col>
            </Row>   
        </Container>
</div>
    )
}

export default Homepage