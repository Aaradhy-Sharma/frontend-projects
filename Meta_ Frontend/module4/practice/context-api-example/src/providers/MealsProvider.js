import React from 'react';

const MealsContext = React.createContext();

const todaysMeal = ["Baked Beans","Baked Sweet Potatoes","Baked Potatoes"];

const MealsProvider = ({children}) => {
    const [meals,setMealsList] = useState(todaysMeal);

    return(
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}


export const useMealsListContext = React.useContext(MealsContext);
export default MealsProvider;