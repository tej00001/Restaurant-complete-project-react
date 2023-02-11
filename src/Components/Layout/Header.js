import React, { Fragment } from "react";
import classes from "./Header.module.css";
import foodList from "../../Images/foodList.avif";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodList} alt="restaurent menu list" />
      </div>
    </Fragment>
  );
};
export default Header;
