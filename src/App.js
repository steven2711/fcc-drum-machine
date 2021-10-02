import React, { Component } from "react";
import drumSounds from "./drum_data";
import DrumPad from "./components/DrumPad";

class App extends Component {
  state = {
    display: "No sound",
    keyCodes: drumSounds.map(obj => obj.keyCode)
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeys);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeys);
  }

  handleKeys = e => {
    if (this.state.keyCodes.includes(e.key.toUpperCase())) {
      const sound = document.getElementById(e.key.toUpperCase());

      const soundObject = drumSounds.filter(
        obj => obj.keyCode === e.key.toUpperCase()
      );

      const { id } = soundObject[0];

      sound.currentTime = 0;
      sound.play();

      this.setState({
        display: id
      });
    }
  };

  handleAction = e => {
    let sound = e.target.firstChild;

    sound.currentTime = 0;

    sound.play();

    this.setState({
      display: e.target.id
    });
  };

  render() {
    return (
      <div className="container box">
        <h4 id="title">Drum Machine</h4>
        <div id="drum-machine">
          <h6 id="display">{this.state.display}</h6>
          <div id="container">
            {drumSounds.map(({ keyTrigger, id, src, keyCode }) => (
              <DrumPad
                key={id}
                keyTrigger={keyTrigger}
                id={id}
                src={src}
                onClick={this.handleAction}
                keyCode={keyCode}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
