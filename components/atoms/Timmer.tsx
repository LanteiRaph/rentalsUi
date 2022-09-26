import React, { useEffect, useState } from 'react';
import {useTime} from 'react-timer-hook'

export const Timmer = () => {
    //Extract the values of the usetime effect.
  const { seconds, minutes, hours, ampm } = useTime({ format: '12-hour' });
  //To avoid hydration erros create local state values for the cmponent 
  const [localTime, setLocalTime ] = useState<string>()

  //Use an efffect to update the ui from the front end.
  useEffect(() => {
    //Set the local time 
    //set the time to be displayed
    const h= hours < 10 ? `0${hours}` : hours
    const m=minutes < 10 ? `0${minutes}` : minutes
    const s= seconds < 10 ? `0${seconds}`: seconds
    setLocalTime(`${h}:${m}:${seconds} ${ampm}`)
  },[seconds, minutes, hours, ampm])

  return (
    <div className='leading-relaxed font-sans'>
      <div>
        {localTime}
      </div>
    </div>
  );
};
