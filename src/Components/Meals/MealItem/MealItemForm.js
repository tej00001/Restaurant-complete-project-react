import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          step: "1",
          min: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
    </form>
  );
};
export default MealItemForm;
