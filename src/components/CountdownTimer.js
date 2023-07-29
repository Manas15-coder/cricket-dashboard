import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
      const targetDate = new Date("Oct 5, 2023 15:40:25");
    const [timeRemaining,setTimeRemaining]=useState(calculateTimeRemaining());
const [isVisible,setIsVisible]=useState(true);
const hide=()=>{
    setIsVisible(false);
}
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            const remaining = calculateTimeRemaining();
            setTimeRemaining(remaining)
            if(remaining.total<=0){
                clearInterval(intervalId)
            }
        },1000);

        return ()=>clearInterval(intervalId)
    },[]);

    function calculateTimeRemaining(){
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        if(distance<=0){
            return{
                total:0,
                days:0,
                hours:0,
                minutes:0,
                seconds:0,
            };
        }

        const oneSecond=1000;
        const oneMinute = oneSecond*60;
        const oneHour = oneMinute*60;
        const oneDay = oneHour*24;

        const days = Math.floor(distance/oneDay);
        const hours = Math.floor((distance%oneDay)/oneHour);
        const minutes = Math.floor((distance%oneHour)/oneMinute);
        const seconds = Math.floor((distance%oneMinute)/oneSecond);
        return{
            total:distance,
            days:days,
            hours:hours,
            minutes:minutes,
            seconds:seconds,
        }

    }
  return (
    <div>
      {isVisible &&
        (timeRemaining.total <= 0 ? (
          <p>Cricket World Cup Has Begun</p>
        ) : (
          <div className="timer" id="timer">
            <button className='close-btn'onClick={hide}><i className="fa-solid fa-xmark fa-bounce" style={{ color: "#ff0000" }} />

</button>
            <h4>ICC Men's Cricket World Cup 2023</h4>
            <h5>is around the corner</h5>
            <p>
              <b>
                {timeRemaining.days} Days : {timeRemaining.hours} Hours :{' '}
                {timeRemaining.minutes} Minutes : {timeRemaining.seconds} Seconds
              </b>
            </p>
          </div>
        ))}
    </div>
  )
}

export default CountdownTimer
