import background from "../../background.jpg";
import Panel from "./log-in-panel.js";

const LogIn = () => {
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
};

export default LogIn;
