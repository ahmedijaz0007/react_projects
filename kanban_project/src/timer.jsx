import { useState,useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0)
    const [isRunning, setRunner] = useState(false)
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        clearInterval(intervalId);
      }
  
      return () => clearInterval(intervalId); // Cleanup on stop/unmount
    }, [isRunning]); // Runs when isRunning changes
  
    function handleStart() {
      setRunner(true)
  
    }
    function handleStop() {
      setRunner(false)
    }
    function handleReset() {
      setRunner(false)
      setTime(0)
    }
    return (
        <>
          <span>{"0" + (Math.floor(time / 60000) % 60) + ":"}</span>
          <span>{"0" + (Math.floor(time / 1000) % 60) + ":"}</span>
          <span>{"0" + (Math.floor(time / 10) % 100)}</span>
          <button hidden={isRunning} onClick={handleStart}>Start</button>
          <button hidden={!isRunning} onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </>
      )
    }