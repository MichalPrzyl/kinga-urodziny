
const foo = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return currentDate
}

const App = () => {
  // const [todaysDate, settodaysDate] = useState(null);
  
  return <>
    <div className='container'>
      <div className='date'></div>
      <div className='psst'></div>
      <div className='today'></div>
      <div className='heart-icon'></div>
      <div className='reason'></div>
    </div>
  </>
}
export default App;
