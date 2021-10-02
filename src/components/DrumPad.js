import React, { Component } from "react";

class DrumPad extends Component {
  state = {};

  render() {
    return (
      <div>
        <div
          className="drum-pad"
          id={this.props.id}
          onClick={this.props.onClick}
          src={this.props.src}
        >
          <audio
            className="clip"
            id={this.props.keyTrigger}
            src={this.props.src}
          />
          {this.props.keyTrigger}
        </div>
      </div>
    );
  }
}

export default DrumPad;
