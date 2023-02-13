import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartcntxt = useContext(CartContext);
  const totalAmount = `RS ${cartcntxt.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntxt.items.map((item) => {
        return (
          <ul key={item.id}>
            <li>Name:{item.name}</li>
            Price={item.price} , QTY={item.quantity}
          </ul>
        );
      })}
    </ul>
  );

  return (
    <Modal>
      <div className={classes.total}>
        {cartItems}
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
