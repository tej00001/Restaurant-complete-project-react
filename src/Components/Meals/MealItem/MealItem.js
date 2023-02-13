import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        {console.log(props)}
        <MealItemForm id={props.id} item={props} />
      </div>
      {/* <label>
        <h1>Amount</h1>
        <input type="number" className="input" defaultValue={1}/>
        <br />
        <button className={classes.button}>+ADD</button>
      </label> */}
    </li>
  );
};

export default MealItem;
