import React from 'react'
import { Link } from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import { Container, Row, Col, Button,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import SpriteContainer from '../spriteAndClocks/spriteContainer'
import Bio from './bioComponent'
import PopoverItem from './popoverItems'





class COFAHContainer extends React.Component{
    constructor(props){
        super()
        this.state={
            randomButton: !!props.sprite,
            dropdownOpen: false
                                                                              
        
        }
    }

    toggle = () => {
        this.setState((prevState)=>(
        {...this.state,
        dropdownOpen: !prevState.dropdownOpen }))
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
            
            // this.setState({...this.state,
            //     randomButton: true})
            this.props.updateChosenHero(chosenhero.sprite,chosenhero.chosen_hero)
            
        })



    }

        pickingHouseForCOFAH=()=>{
            return(
            < Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                {/* <DropdownToggle color="danger"  disabled= {this.state.randomButton}> */}
                                <DropdownToggle color="danger"  disabled= {false}>

                                    I MUST CALL OUT FOR A HERO. THIS HOUSE WILL SURELY ANSWER...
                                </DropdownToggle>
                                <DropdownMenu  >
                                   <Row>
                                       {this.props.houses.map(house => <PopoverItem {...house}/>)  }
                                </Row>      
                                </DropdownMenu>
                            </Dropdown>


      
            
    )
        }



    render(){
        return(
            <div>
                <h1> Recruit a hero time!!</h1>
                <Container>
                    <Row className="row justify-content-between">
                        <Col md="5">
                            <Button disabled= {this.state.randomButton} onClick={()=>this.callHero()} color="warning" >DESPERATELY CALLING OUT FOR A HERO! IT CAN BE ANYONE</Button>
                        </Col>
                        <Col md="5">
                            {this.pickingHouseForCOFAH()}
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row className="row justify-content-between featured-quests-container" id="COFAH-page-bottom-row">
                        <Col md="3"  id="COFAH-page-hero">
                            {this.props.sprite ? 
                            <>
                            <h3> {this.props.chosenHero.name} Has Answered The Call!</h3>
                            <img src="/images/magic cloud.gif" id="sparkles" />
                            <SpriteContainer key="mainChosenHero" {...this.props.sprite} divName="COFAH-avatar-container"/>
                            {/* <img id="podium" alt="podium" src="/images/podium.png" /> */}
                            </> 
                            :
                            <>
                            <h4>No Hero Has Answered Your Call Yet. Chose from above to Call Out For A Hero!</h4>
                            <img id="question" alt="No Hero Placeholder" src="/images/question.svg" />
                            </>
                            } 
                        </Col>
                        <Col md="5">
                        {this.props.chosenHero ? <Bio {...this.props.chosenHero} /> : <h1>Call Out For A Hero to get your Certified Pomodoria Hero Card Today!</h1>}
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
export default COFAHContainer

COFAHContainer.defaultProps={
    chosenHero:  {"id":97,"user_id":230,"hero_id":237,"name":"Elfberto","reputation":34,"flavor":{"trait":"I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness. Also,I live for the thrill of the hunt.","bond":"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.","flaw":"I have lived a hard life and find it difficult to empathize with others."}},
  sprite: {"url":"http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1084cab903f76d240ad1edba2d24b0d9b3aa9a36/elf%201.png","width":816.8,"height":593.5,"steps":10},
  houses: [

    {id:"Fairy",item:{house:"The Circus of Smiles" ,url:"/images/icons/Fairies.png",text:"A band of magic users who believe to have discovered a way to create a new plane of existence. Their objective is to create a realm of pure good, where all races can live happily and safely forever.Their flag may seem scary, but under the mask is all smiles..."}},
    {id:"Knight",item:{house: "The Knights of the Arsena",url:"/images/icons/Knights.png",text:"An order of holy knights who value showmanship. They stage elaborate gladiatorial bouts as a way to fund expeditions to hunt and destroy evil forces throughout the world. Arsena Bear the Brave Bear adorns their flag"}},
    {id:"Pirate",item:{house:"Glory’s Treasure" ,url:"/images/icons/Pirates.png",text:"A rowdy faction of infamous pirates, searching for the long lost treasure of the ancient kingdom. Those that see their flag of the Jolly Roberto know there is trouble afoot."}},
    {id:"Troll",item:{house:"The Unallowed", url:"/images/icons/Trolls.png",text:"Mercenary band comprised of former Troll prisoners. They are known to make use of scavenged or improvised weapons. Often found fighting in rebellions. Have a very loose command structure and usually exist in smaller groups. Their flag is a tribute to the troll who liberated them."}},
    {id:"WW",item:{house:"Raven Queen's Valkyries", url:"/images/icons/WW.png",text:"A group of warriors that protect Pomodira from the unknown evil of the world. This faction is mysterious in nature, and the very location of their hideout is unknown. Their flag is a tribute to deity the Raven Queen"}},


  ]





}