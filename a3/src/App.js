import React,{useState} from 'react';
import './App.css';
import LapButton from './components/LapButton';
import Laps from './components/Laps';
// import LapButton from './components/LapButton';
import ResetButton from './components/ResetButton';
import ResumeButton from './components/ResumeButton';
import StartButton from './components/StartButton';
import StopButton from './components/StopButton';
import StopWatchTimer from './components/StopWatchTimer';

export default function App() {
  const [Time, setTime] = useState({ms:0,s:0,m:0,h:0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0) //notstarted=0/started=1/pause=2//
  const [lapData, setlapData] = useState([])

  const start = () =>{
    run();
    setInterv(setInterval(run,10))
    setStatus(1)
  }

  const stop = () =>{
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () =>{
    clearInterval(interv)
    setTime({ms:0,s:0,m:0,h:0})
    setStatus(0)
    setlapData([])
  }
  const resume =()=>{
    run()
    setInterv(setInterval(run,10))
    setStatus(1)
  }
  const lap = () =>{
    const {ms , s , m , h} = Time;
    if(m===0&&s===0&&ms===0&&h===0){
      return
    }else{
      const {ms,s,m,h} = Time
      const data = [...lapData]
      data.unshift(`${h}:${m}:${s}:${ms}`)
      setlapData(data)
    }
  }
  

  var updatedMS = Time.ms ,updatedS = Time.s ,updatedM = Time.m ,updatedH = Time.h ;


  const run = ()=>{
    if(updatedM>59){
      updatedH++;
      updatedM=0;
    }
    if(updatedS>59){
      updatedM++;
      updatedS=0;
    }
    if(updatedMS>99){
      updatedS++;
      updatedMS=0;
    }
    updatedMS++;
    return setTime({ms:updatedMS,s:updatedS,m:updatedM,h:updatedH})
  }

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>StopWatch</h1>
      <div className="stopwatch">
        <div className="timer">
          <StopWatchTimer Time={Time}/>
        </div>
        <div className="buttons">
          {
            status===0?<div><StartButton start={start}/><LapButton lap={lap}/></div>:""
          }
          {
            status===1?<div><StopButton stop={stop}/><LapButton lap={lap}/></div>:""
          }
          {
            status===2?<div><ResumeButton resume={resume}/><ResetButton reset={reset}/><LapButton lap={lap}/></div>:""
          }
        </div>
        <div>
          <Laps lapData={lapData}/>
      </div>
      </div>
    </div>
  );
}

