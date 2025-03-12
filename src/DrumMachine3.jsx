import React, { use, useEffect, useState } from 'react'

// import { useEffect, useState } from "react";

const drumPads = [
  {
    key: "Q",
    sound: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    sound: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    sound: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    sound: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3",
  },
  {
    key: "S",
    sound: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Clap.mp3",
  },
  {
    key: "D",
    sound: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Open-HH.mp3",
  },
  {
    key: "Z",
    sound: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    sound: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick.mp3",
  },
  {
    key: "C",
    sound: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Closed-HH.mp3",
  },
];
const DrumMachine = () => {
  const [keys, setKeys] = useState(null);
  const playSound = (audios) => {
    new Audio(audios).play();
  };
  const handlePlay = (key) => {
    switch (key) {
      case "q":
        return playSound("/Heater-1.mp3");
      case "w":
        return playSound("/Heater-2.mp3");
      case "e":
        return playSound("/Heater-3.mp3");
      case "a":
        return playSound("/Heater-4_1.mp3");
      case "s":
        return playSound("/Heater-6.mp3");
      case "d":
        return playSound("/Cev_H2.mp3");
      case "z":
        return playSound("/Dsc_Oh.mp3");
      case "x":
        return playSound("/Kick_n_Hat.mp3");
      case "c":
        return playSound("/RP4_KICK_1.mp3");
      default:
    }
  };

  const handleKeyPress = (event) => {
    setKeys(event);
  };

  useEffect(() => {
    keys && handlePlay(keys.key);
  }, [keys]);

  window.addEventListener("keypress", handleKeyPress);

  return (
    <div id="drum-machine">
      <div id="display">
        {drumPads?.map((item) => (
          <button
            className='drum-pad'
            style={{backgroundColor:item?.key.toLowerCase() === keys?.key ?"orange":''}}
            onClick={() => handlePlay(item?.key.toLowerCase())}
          >
            {item?.key}
          </button>
         
        ))}
        
      </div>
    </div>
  );
};

export default DrumMachine;