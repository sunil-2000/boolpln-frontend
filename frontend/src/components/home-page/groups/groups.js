import classes from "../../../styles/groups/groups.module.css";
import { useState, useEffect } from "react";
// import "reactjs-popup/dist/index.css";

let initialData = [];

const Groups = ({ onClick, newGroupName, listGroups, setListGroups }) => {
  useEffect(() => {
    if (listGroups.length > 0) setList(listGroups);
  });

  const [list, setList] = useState(initialData);

  function clicked() {
    onClick();
    setListGroups(list.push(listGroups));
    console.log(list);
  }

  return (
    <div className={classes.groupContainer}>
      <h1>Groups</h1>
      <div className={classes.groupScroll}>
        <button className={classes.addButton} onClick={() => clicked()}>
          Add Group
        </button>
        {newGroupName}
        {list.map((group) => (
          <div className={classes.groupBox}>
            <svg height="5em" viewBox="-1 -1 2 2">
              <circle cx="0" cy="0" r="1" fill="red"></circle>
            </svg>
            <div>{group.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
