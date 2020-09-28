import React from 'react'
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom'

const Bio =(props)=>{



    return(
      
        
        <div className="wrapper">
    <div className="poster">
      
      
      <div className="chosenHero-Name">{props.name}</div>
      <div className="reputation">Things You Need to Know About Me</div>
      <div className="bio">
        {props.flavor.trait} 
      </div>
      <div className="reputation">Flaws:</div>
      <div className="bio">
        {props.flavor.flaw} 
      </div>

      <div className="reputation">Things You Need to Know About Me</div>
      <div className="bio">
        {props.flavor.bond} 
      </div>
      <div className="reputation">Reputation: {props.reputation}</div>


      

    </div> 
  </div> 
  
  



    )
}

export const BioStats =(props)=>{



    return(
      
        
        <div className="wrapper">
    <div className="poster">
        
      
      
      <div className="chosenHero-Name">{props.name}</div>
      <div className="reputation">Reputation</div>
      <div className="bio">
        {props.reputation} 
      </div>
      <div className="reputation">Quests Completed</div>
      <div className="bio">
        {props.tasksCompleted}
      </div>

      <div className="reputation"># of Quests left Today</div>
      <div className="bio">
        {props.numberOfTasks} 
      </div>
      <div className="reputation">Reputation: {props.reputation}</div>


      

    </div> 
  </div> 
  
  



    )
}

export const BioEmpty =()=>{



    return(
      
        
        <div className="wrapper">
    <div className="poster">
        
      
      
    
      
      <div className="bio">
      Get your Certified Pomodoria Hero Card Today
        <Link to ="/cofah" >
            <Button > Call Out For A Hero </Button>
        </Link>
      </div>


      

    </div> 
  </div> 
  
  



    )
}

export default Bio

