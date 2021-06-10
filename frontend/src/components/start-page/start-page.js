import React, { Component } from "react";
import background from "../../background.jpg";
import Panel from "./start-panel.js";

class Start extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Panel />
      </div>
    );
  }
}

export default Start;
