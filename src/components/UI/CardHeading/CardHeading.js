import React from "react";
import ListIcon from "../ListIcon";
import CheckBadgeIcon from "../CheckBadgeIcon";

import classes from "./CardHeading.module.css";

const CardHeading = ({
  hideCompletedList,
  showCompletedList,
  isShownCompletedList,
}) => {
  return (
    <>
      <div className={classes.menu}>
        <div
          onClick={() => hideCompletedList()}
          className={isShownCompletedList ? classes.disabled : classes.enabled}
        >
          <ListIcon />
        </div>
        <div
          onClick={() => showCompletedList()}
          className={isShownCompletedList ? classes.enabled : classes.disabled}
        >
          <CheckBadgeIcon />
        </div>
      </div>
    </>
  );
};

export default CardHeading;
