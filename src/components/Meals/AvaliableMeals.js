import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import react, { useEffect, useState } from "react";

const AvaliableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-shop-model-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something goes wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

      fetchMeals().catch((error)=>{
         setIsLoading(false);
      setHttpError(error.message);
      });

  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError){
    return(<section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>)
  }

  const mealList = meals.map((meal) => (
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
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvaliableMeals;
