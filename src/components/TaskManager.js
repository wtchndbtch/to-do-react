import ListIcon from "../UI/ListIcon";
import CheckBadgeIcon from "../UI/CheckBadgeIcon";

import classes from "./TaskManager.module.css";

const TaskManager = props => {
  return (
    <div className={classes.menu}>
      <div>
        <ListIcon />
      </div>
      <div className={classes.disabled}>
        <CheckBadgeIcon />
      </div>
    </div>
  );
};

export default TaskManager;
