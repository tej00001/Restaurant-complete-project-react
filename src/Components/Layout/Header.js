import { Fragment } from "react";
import foodList from "../../Images/foodList.avif";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodList} alt="A table full of delicious foods!" />
      </div>
    </Fragment>
  );
};

export default Header;
