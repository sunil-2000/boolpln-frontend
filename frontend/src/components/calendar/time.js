import React from "react";

class Time extends React.Component {
  render() {
    return (
      <button
        className='time'
        onClick={this.props.onClick}
        style={{ backgroundColor: this.props.fillColor }}
        key={null}
      ></button>
    );
  }
}

export default Time;
