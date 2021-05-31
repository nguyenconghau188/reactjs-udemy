import { Fragment } from "react";

import classes from "./Header.module.css";
import mainImage from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes.main_image}>
        <img src={mainImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
