
import React, {useState, useEffect} from 'react';
import reasons, { getRandomInt } from './Reasons';
import './style.css'

const getTodaysDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return currentDate
}


const App = () => {
  const [todaysDate, setTodaysDate] = useState(null);
  const [reason, setReason] = useState(null);

  useEffect(() => {
    setTodaysDate(getTodaysDate());
    const x = getRandomInt(0,11);

    console.log(reasons[x]);
    setReason(reasons[x]);
    
    
  }, [])
  
  return <>
    <div className='container'>
      <div className='date'>{todaysDate}</div>
      <div className='psst'>Pssssstt... Kiki</div>
      <div className='today'>Dzisiaj Cię kocham bo...</div>
      <div className='heart-icon'></div>
      <div className='reason'>{reason}</div>
    </div>
  </>
}
export default App;
