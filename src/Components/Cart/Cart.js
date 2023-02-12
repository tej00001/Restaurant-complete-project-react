import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Biryani", amount: 2, price: 429.0 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>499.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Order</button>
        <button className={classes.button}>Close</button>
      </div>
    </Modal>
  );
};
export default Cart;
