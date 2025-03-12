
import React, { useState, useEffect } from "react";
import "./DrumMachine.css";


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
    
  const [display, setDisplay] = useState("");

  const playSound = (key, sound) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(sound);
    }
  };

  const handleKeyPress = (event) => {
    const pad = drumPads.find((pad) => pad.key === event.key.toUpperCase());
    if (pad) {
      playSound(pad.key, pad.sound);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-container">
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            id={pad.sound}
            className="drum-pad"
            onClick={() => playSound(pad.key, pad.sound)}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.src}></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
