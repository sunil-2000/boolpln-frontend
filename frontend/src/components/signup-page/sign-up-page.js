import React, { Component } from "react";
import background from "../../background.jpg";
import Panel from "./sign-up-panel.js";

class SignUp extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Panel />
      </div>
    );
  }
}

export default SignUp;
