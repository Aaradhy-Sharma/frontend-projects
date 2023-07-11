import { useMealsListContext } from "./providers/MealsProvider";

const Counter = () => {
    const meals = useMealsListContext();

    return(
        <div className="Counter">
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    )
}