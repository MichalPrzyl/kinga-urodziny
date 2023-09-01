
import React, {useState, useEffect} from 'react';
import reasons, { getRandomInt, getTodaysReason } from './Reasons';
import './style.css'
import logo from  './big-red-heart-drawing.png';


const getTodaysDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // adding '0' in the beginning if number of digits == 1
  if (day.toString().length == 1){
    day = `0${day}`
  }
  if (month.toString().length == 1){
    month = `0${month}`
  }

  // returning value
  let currentDate = `${day}-${month}-${year}`;
  return currentDate
}


const App = () => {
  const [todaysDate, setTodaysDate] = useState(null);
  const [reason, setReason] = useState(null);
  const [rotateChevron, setRotateChevron] = useState(false);


  useEffect(() => {
    const todayDate = getTodaysDate();
    setTodaysDate(todayDate); // state
    const goodReason = getTodaysReason(todayDate); // getting reason for today's date
    setReason(goodReason);
    
    
  }, [])
  const handleRotate = () => setRotateChevron(!rotateChevron);
  const rotate = rotateChevron ? "rotate(360deg)" : "rotate(0)"
  return <>
    <div className='container'>
      <div className='date'>{todaysDate}</div>
      <div className='psst'>Pssssstt... Kiki</div>
      <div className='today'>Dzisiaj Cię kocham, bo...</div>
      <div className='heart-icon' style={{transform: rotate, transition: "all 0.2s linear"}} onClick={handleRotate}><img src={logo}  /></div>
      <div className='reason'>{reason}</div>
    </div>
  </>
}
export default App;
