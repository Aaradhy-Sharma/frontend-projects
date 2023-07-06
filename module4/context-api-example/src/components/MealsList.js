import { useMealsListContext } from "./providers/MealsProvider";

const mealsList = () => {
    const{meals} = useMealsListContext();

    return(
        <div className="mealsList">
            <h1>Meals List using Context API</h1>
            {meals.map((meals,index)=> (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    );
};

export default mealsList;