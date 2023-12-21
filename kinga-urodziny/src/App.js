
import React, {useState, useEffect} from 'react';
import reasons, { getRandomInt, getTodaysReason } from './Reasons';
import './style.css'
import logo from  './kandm.png';


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

  const clickHeart = () =>{
    window.alert("NO I PO CO KLIKASZ?!🥰😂");
  }

  return <>
    <div className='container'>
      <div className='date'>{todaysDate}</div>
      <div className='psst'>Pssssstt... Kiki🥰</div>
      <div className='today'>Dzisiaj Cię kocham, bo...</div>
      <div onClick={clickHeart} className='heart-icon rotating'><img src={logo}  /></div>
      <div className='reason'>{reason}</div>
      <div>~MP</div>
      <div className='ps'>PS. Kliknij w serduszko</div>
    </div>
  </>
}
export default App;
