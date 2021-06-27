import { useState } from "react";
import classes from "../../../styles/groups/groups.module.css";
// import "reactjs-popup/dist/index.css";

let initialData = [
  { name: "Group 1" },
  { name: "Group 2" },
  { name: "Group 3" },
];

const Groups = () => {
  const [list, setList] = useState(initialData);

  function renderGroups() {
    return;
  }

  function clicked() {
    setList(list.concat({ name: "group n" }));
    console.log(list);
  }
  return (
    <div className={classes.groupContainer}>
      <h1>Groups</h1>
      <div className={classes.groupScroll}>
        <button className={classes.addButton} onClick={() => clicked()}>
          Add Group
        </button>
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
