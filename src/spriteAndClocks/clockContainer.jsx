import React  from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'



const ClockContainer =(props)=>{
    const color = {
        active: "#85bb65",
        break:  "#45b3e0", 
        bad: "#CA0B00"
    }

    const time = {
        active: (25*60),
        break:  (5*60),
        bad: (10)
        

    }

    const displayTime = ({remainingTime}) =>{
        const minutes = Math.floor(remainingTime/60)
        const seconds = remainingTime % 60

        const displayMinutes = (minutes <=0 ? "" : `${minutes} minutes and` )
        const displaySeconds = (seconds <= 0 ? "00 seconds" : `${seconds} seconds`)

        return   <p id="inside-timer-text" > {(minutes+seconds <= 0) ? "done" : `${displayMinutes} ${displaySeconds}`} </p>
        }

    


    const clockFunctions = {
        active: props.active,
        break:  props.break,
        bad: props.bad
    }
    




    return(
    <div id="clockContainer" >
        <div id="clockBackground" >
            <CountdownCircleTimer
                onComplete={() => {
                // do your stuff here
                clockFunctions[props.status]()
                return [true, 1500] // repeat animation in 1.5 seconds
                }}
                isPlaying
                size={150}
                duration={time[props.status]}
                colors= {color[props.status]}
                children={ displayTime }
               
            />
        </div>
    </div>
    )
}

export default ClockContainer