import './App.css';
import Timer from './components/Timer';
import { useDispatch, useSelector } from "react-redux";
import StartBtn from './components/StartBtn'
import StopBtn from './components/StopBtn'
import ResetBtn from './components/ResetBtn'
import ShowLaps from './components/ShowLaps'
import LapBtn from './components/LapBtn'
import { useState , useEffect ,useCallback } from 'react';
import { increment, reset, setLaps, resetLaps } from "./slices/Slice";

function App() {

  const [running, setRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const dispatch = useDispatch()
  let time = useSelector((state) => state.timer.time);
  let laps = useSelector((state) => state.timer.laps)

  console.log(laps)


  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        dispatch(increment(10));
      }, 10);
      return () => clearInterval(interval);
    }//eslint-disable-next-line
  }, [running]);
  

  const timeConvert = (duration) => {
    var milliseconds = Math.floor((duration % 1000) / 10),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60)
  
    return(`${(minutes >10)?minutes:"0"+minutes}:${(seconds>10)?seconds:"0"+seconds}:${(milliseconds>10)?milliseconds:"0"+milliseconds}`);
  }

  const start = useCallback(() => {
    setRunning(true);
    setIsPaused(false);
  }, []);
  const stop = useCallback(() => {
    setRunning(false);
    setIsPaused(true);
  }, []);

  const resetTime = useCallback(() => {
    if (isPaused) {
      setRunning(false)
      dispatch(resetLaps())
      dispatch(reset())
      setIsPaused(false)
    }//eslint-disable-next-line
  }, [isPaused]);

  function lapTime() {
    const timelap = timeConvert(time)
    dispatch(setLaps(timelap));
  }

  return (
    <div className='stopwatch_container'>
      <h1>StopWatch</h1>
      <Timer time={time}></Timer>
      <div className='btn_group'>
        <StartBtn start={start} isPaused={isPaused}/>
        {running&&<StopBtn stop={stop}/>}
        {!running&&<ResetBtn resetTime={resetTime}/>}
        <LapBtn lapTime={lapTime}/>
      </div>
      <div className='laps'>
        <ShowLaps laps={laps}/>
      </div>
    </div>
  );
}

export default App;
