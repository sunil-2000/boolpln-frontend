import React from "react";

class Time extends React.Component {
  render() {
    const backColor = {
      backgroundColor: this.props.fillColor,
    };
    return (
      <button
        className='time'
        onClick={this.props.onClick}
        style={backColor}
        key={null}
        selected={false}
      ></button>
    );
  }
}

export default Time;
