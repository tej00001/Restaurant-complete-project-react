import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Chicken biryani family pack",
    price: 429.0,
  },
  {
    id: "m2",
    name: "Ice Cream",
    description: "black forest",
    price: 165.0,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Indian, raw, meaty",
    price: 129.0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 189.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
