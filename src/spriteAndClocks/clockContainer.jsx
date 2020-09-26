import React,{useState}  from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'



const ClockContainer =(props)=>{
    const [time, setTime] = useState(25*60);
    const [status, setStatus] = useState("active");
    const [color, setColor] = useState("#85bb65");

    const displayTime = ({remainingTime}) =>{
        const minutes = Math.floor(remainingTime/60)
        const seconds = remainingTime % 60

        const displayMinutes = (minutes <=0 ? "" : `${minutes} minutes and` )
        const displaySeconds = (seconds <= 0 ? "00 seconds" : `${seconds} seconds`)

        return   <p id="inside-timer-text" > {(minutes+seconds <= 0) ? "done" : `${displayMinutes} ${displaySeconds}`} </p>
        }

    
    const active = () =>{
        
    }
    




    return(
    <div style={{color:"purple"}} >
            <CountdownCircleTimer
                onComplete={() => {
                // do your stuff here
                return [true, 1500] // repeat animation in 1.5 seconds
                }}
                isPlaying
                size={200}
                duration={time}
                colors= {color}
                children={ displayTime }
            />
    </div>
    )
}

export default ClockContainer