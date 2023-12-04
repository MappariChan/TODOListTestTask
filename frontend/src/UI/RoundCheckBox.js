import { useEffect, useState } from "react";

import classes from "./RoundCheckBox.module.css";

const RoundCheckBox = ({ onChange, value }) => {
  console.log(value);
  return (
    <div
      className={classes["round-container"]}
      onClick={(e) => {
        onChange();
        e.stopPropagation();
      }}
    >
      <div
        className={`${classes["round-switcher"]} ${
          value ? classes.active : ""
        }`}
      />
    </div>
  );
};

export default RoundCheckBox;
