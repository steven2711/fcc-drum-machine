import clav from "./drum_sounds/Clav.mp3";
import bassKick from "./drum_sounds/Bass_kick.mp3";
import chicagoChord from "./drum_sounds/chicago_chord.mp3";
import chimeSwell from "./drum_sounds/chime_swell.mp3";
import cymbol from "./drum_sounds/cymbol.mp3";
import festivalLead from "./drum_sounds/festival_lead.mp3";
import hiHat from "./drum_sounds/hi_hat.mp3";
import powerFifths from "./drum_sounds/power_fifths.mp3";
import snare from "./drum_sounds/snare.mp3";

const drum_sounds = [
  {
    keyCode: "Q",
    keyTrigger: "Q",
    id: "bass-kick",
    src: bassKick
  },
  {
    keyCode: "W",
    keyTrigger: "W",
    id: "chicago-chord",
    src: chicagoChord
  },
  {
    keyCode: "E",
    keyTrigger: "E",
    id: "chime-swell",
    src: chimeSwell
  },
  {
    keyCode: "A",
    keyTrigger: "A",
    id: "clav",
    src: clav
  },
  {
    keyCode: "S",
    keyTrigger: "S",
    id: "cymbol",
    src: cymbol
  },
  {
    keyCode: "D",
    keyTrigger: "D",
    id: "festival-lead",
    src: festivalLead
  },
  {
    keyCode: "Z",
    keyTrigger: "Z",
    id: "hi-hat",
    src: hiHat
  },
  {
    keyCode: "X",
    keyTrigger: "X",
    id: "power-fifths",
    src: powerFifths
  },
  {
    keyCode: "C",
    keyTrigger: "C",
    id: "snare",
    src: snare
  }
];

export default drum_sounds;
