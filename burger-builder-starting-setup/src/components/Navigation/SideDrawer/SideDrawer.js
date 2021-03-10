import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems";
import classes from "./SideDrawer.css";
import Aux from "../../../hoc/Auxiliaries";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachClass = [classes.SideDrawer, classes.Open];
  if (props.showSideDrawer === false) {
    attachClass = [classes.SideDrawer, classes.Close];
  }

  return (
    <Aux>
      <Backdrop show={props.showSideDrawer} clicked={props.closedSideDrawer} />
      <div className={attachClass.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
