import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartcntxt = useContext(CartContext);
  console.log("reinitialized cartcntxt", cartcntxt);

  const addItemsToCart = (event) => {
    event.preventDefault();

    const quantity = document.getElementById("amount_" + props.id).value;

    cartcntxt.addItem({ ...props.item, quantity: quantity });
    console.log("after addItemToCart", cartcntxt);
  };
  return (
    <form className={classes.form}>
      {console.log("inside render", cartcntxt.items)}

      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          step: "1",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemsToCart}>+ ADD</button>
    </form>
  );
};
export default MealItemForm;
