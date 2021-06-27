import classes from "../../styles/home-page/popup.module.css";
import { useState } from "react";

const Popup = ({ onClick, setListGroups }) => {
  const [group, setGroup] = useState("");

  function updateGroup(event) {
    setGroup(event.target.value);
  }

  function updateGroupName(event) {
    event.preventDefault();
    setListGroups([group]);
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>
        <span className={classes.close} onClick={onClick}>
          &times;
        </span>
        <form onSubmit={updateGroupName}>
          <h3>Create Your Group</h3>
          <label>
            Name:
            <input
              type="text"
              value={group}
              onChange={updateGroup}
              required="required"
            />
          </label>
          <br />
          <input type="Submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default Popup;
