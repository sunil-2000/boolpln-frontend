import React from "react";

class Side extends React.Component {
  render() {
    const style = {
      borderRadius: "50%",
      border: "solid",
      width: "500px",
      height: "500px",
    };
    return <div style={style}></div>;
  }
}
export default Side;
