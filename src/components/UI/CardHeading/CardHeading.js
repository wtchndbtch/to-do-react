import React from "react";
import ListIcon from "../ListIcon";
import CheckBadgeIcon from "../CheckBadgeIcon";

import classes from "./CardHeading.module.css";

const CardHeading = ({
  hideCompletedList,
  showCompletedList,
  isShownCompletedList,
}) => {
  const showCompletedListHandler = () => showCompletedList();

  const hideCompletedListHandler = () => hideCompletedList();

  return (
    <>
      <div className={classes.menu}>
        <div
          onClick={hideCompletedListHandler}
          className={isShownCompletedList ? classes.disabled : classes.enabled}
        >
          <ListIcon />
        </div>
        <div
          onClick={showCompletedListHandler}
          className={isShownCompletedList ? classes.enabled : classes.disabled}
        >
          <CheckBadgeIcon />
        </div>
      </div>
    </>
  );
};

export default CardHeading;
