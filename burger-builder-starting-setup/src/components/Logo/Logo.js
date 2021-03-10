import React from "react";

import LogoBurger from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = () => (
  <div className={classes.Logo}>
    <img src={LogoBurger} alt="Logo Burger" />
  </div>
);

export default logo;
