import React, { useState, useEffect } from "react";
import "./App.css";

const heaterKit = [
  { key: "Q", sound: "Heater 1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", sound: "Heater 2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", sound: "Heater 3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", sound: "Heater 4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", sound: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", sound: "Open-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", sound: "Kick-n'-Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", sound: "Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", sound: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
];

const pianoKit = [
  { key: "Q", sound: "Chord 1", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
  { key: "W", sound: "Chord 2", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
  { key: "E", sound: "Chord 3", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },
  { key: "A", sound: "Shaker", src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
  { key: "S", sound: "Open-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
  { key: "D", sound: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
  { key: "Z", sound: "Punchy Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
  { key: "X", sound: "Side Stick", src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
  { key: "C", sound: "Snare", src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
];

function DrumMachine() {
  const [display, setDisplay] = useState("Press a Key");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [pianoMode, setPianoMode] = useState(false);

  const currentKit = pianoMode ? pianoKit : heaterKit;

  const playSound = (key, sound) => {
    if (!power) return;
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play();
      setDisplay(sound);
    }
  };

  const handleKeyPress = (event) => {
    if (!power) return;
    const pad = currentKit.find((pad) => pad.key === event.key.toUpperCase());
    if (pad) playSound(pad.key, pad.sound);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [power, volume, pianoMode]);

  return (
    <div id="drum-machine" className="container">
      <div className="drum-pads">
        {currentKit.map((pad) => (
          <button
            key={pad.key}
            className="drum-pad"
            id={pad.sound}
            onClick={() => playSound(pad.key, pad.sound)}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.src}></audio>
          </button>
        ))}
      </div>

      <div className="controls">
        Powergit init
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={power}
            onChange={() => setPower(!power)}
          />
        </div>

        <p id="display">{display}</p>

        Volume
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => {
            setVolume(e.target.value);
            setDisplay(`Volume: ${Math.round(e.target.value * 100)}%`);
          }}
        />

        Piano Mode
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={pianoMode}
            onChange={() => setPianoMode(!pianoMode)}
          />
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;