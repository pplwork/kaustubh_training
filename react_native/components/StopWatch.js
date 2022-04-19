import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DisplayComponent from "./DisplayComponent";
import ButtonComponent from "./ButtonComponent";

const StopWatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [lapv, setLapv] = useState([]);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setLapv([]);
  };

  const resume = () => start();

  const lap = () => {
    setLapv([time, ...lapv]);
  };

  return (
    <View style={styles.mainsection}>
        <DisplayComponent time={time} />
        <ButtonComponent
          status={status}
          resume={resume}
          reset={reset}
          stop={stop}
          start={start}
          lap={lap}
        />
        <View style={styles.lap_content}>
        {lapv &&
          lapv.map((lapp, i) => {
            return (
              <View style={styles.laps} key={i}>
                {lapp.h !== 0 ? <Text>{lapp.h}</Text> : <View></View>}
                <Text>{lapp.m} : </Text>
                <Text>{lapp.s} : </Text>
                <Text>{lapp.ms}</Text>
              </View>
            );
          })}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainsection: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  laps: {
    flexDirection: "row",
    margin:"1rem",
  },
  lap_content:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
  
  }
});

export default StopWatch;