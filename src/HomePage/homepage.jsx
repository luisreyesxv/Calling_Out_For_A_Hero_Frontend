import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'
import Banner from './banner'
// import {SpriteAnimator} from 'react-sprite-animator'
import SpriteContainer from '../spriteAndClocks/spriteContainer'

const Homepage = () =>{




    return(
    //     <div>
    //         <h1>This is my homepage</h1>
    //         Calling out for a hero, coming soon
    // <img alt="beginning sprite" src="http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a6b855051ac18a44fadb0867a516973e3cfe4a5/pirate.PNG" />
    //     </div>
    <>
   
    
        
        <Container>
            
 
               
            <Row  >
                <Banner />
                <Col>
                <Jumbotron >
                <Row className="row justify-content-between"  noGutters={false} >
                
              

                {/* <SpriteContainer key="demoHero" url="/images/testknightsprite.png" width={740} height= {508.66666666666666667}  steps={10} status="demoHero" divName="home-avatar-container"/>
                <SpriteContainer key="enemyOrc1" url="/images/enemies/1.png" width={531} height= {357.5}  steps={10} status= "demoEnemy" divName="home-avatar-container"/>
                <SpriteContainer key="enemyOrc2" url="/images/enemies/1.png" width={531} height= {357.5}  steps={10} status= "demoEnemy" divName="home-avatar-container"/>
                <SpriteContainer key="enemyOrc2" url="/images/enemies/1.png" width={531} height= {357.5}  steps={10} status= "demoEnemy" divName="home-avatar-container"/> */}
               

            
        </Row>
        <div id="homepage-welcome-message">
                <h1 className="display-4"> Welcome to Calling Out For A Hero</h1>
                    <p>
                    The <strong>Productivity app</strong> & <strong> Pomodoro Timer </strong> designed to help you keep track & accomplish of your personal tasks. With  
                    <strong> Calling Out For A Hero</strong> , you will

                    </p>
                 <Row className="row justify-content-between"  noGutters={false} >
                      <SpriteContainer key="demoHero" url="/images/HomeFairy.png" width={185} height= {127.166666666666666667}  steps={10} status="demoHero" divName="home-avatar-container"/>
                      <SpriteContainer key="enemyOrc1" url="/images/enemies/1.png" width={531} height= {357.5}  steps={10} status= "demoEnemy" divName="home-avatar-container"/>
                </Row>
                    
                   
                        <h5>
                            <ul className="welcome-message-ul" >
                                    <li>Get your own Personal Hero</li>
                                    <li>Set Up and Organize Personal Quests for both you & your Hero to complete</li>
                                    <li>Enjoy music playlists designed to help you get into the zone and complete your tasks</li>
                                    <li>Use Pomodoro Timer & the Pomodoro Technique to help pace yourself in the real world to make sure you don't burn yourself out</li>
                                    <li>Get to watch Your Personal Hero grow along with you</li> 
                            </ul> 
                        </h5>
                   
                    <Row className="row justify-content-between"  noGutters={false} >
                      <SpriteContainer key="demoHero2" url="/images/Home%20Knight.png" width={251.40} height={142.166666666666666667}  steps={10} status="demoEnemy" divName="home-avatar-container"/>
                      <SpriteContainer key="enemyOrc2" url="/images/enemies/2.png" width={545} height={388}  steps={10} status= "demoHero" divName="home-avatar-container"/>
                    </Row>
                    
                    
                    <p>     
                    Inside <strong>Calling Out For A Hero</strong>, you will find yourself in the world of Pomodoria, which is filled with rival factions. As you go on your own personal quests,
                    you find yourself getting burned out & looking for help. You reach the local guild hall, where you find yourself  <strong>Calling Out For A Hero</strong>. The call is heard all throughout
                    Pomodoria, where different heroes come to your aid. As you continue doing your quests, your hero will grow along with you, and there may be a few surprises along the way.
                    There is no better time than the present for <strong>Calling Out For A Hero</strong>
                        
                   </p>
        </div>
                    </Jumbotron>


                </Col>
            </Row>

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
        </Container>
</>
    )
}

export default Homepage