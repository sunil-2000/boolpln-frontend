import Groups from "./groups/groups.js";
import Week from "./calendar/week.js";
import classes from "../../styles/home-page/home.module.css";
import ReactNotifications from "react-notifications-component";
import NavBar from "./top-bar/nav-bar.js";
import { useState } from "react";
import PopUp from "./popup";

const Home = () => {
  // ReactNotifications element locked in place, any other file can add
  // notifications to this component -> see methods unders local-objects/notifications

  const [seen, setSeen] = useState(false);
  const [listGroups, setListGroups] = useState([]);

  function togglePopup() {
    setSeen(!seen);
  }

  return (
    <div className={classes.page}>
      <div className={classes.nav}>
        <NavBar />
      </div>
      <div className={classes.calendar}>
        <Groups
          onClick={togglePopup}
          listGroups={listGroups}
          setListGroups={setListGroups}
        />
        {seen ? (
          <PopUp onClick={togglePopup} setListGroups={setListGroups} />
        ) : null}
        <Week />
        <ReactNotifications />
      </div>
    </div>
  );
};

export default Home;
