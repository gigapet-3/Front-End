import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const MealList = props => {
    const [list, setList] = useState();

    useEffect(() => {
        axiosWithAuth()
        .get('/meals')
        .then(response => {
            console.log(response)
            setList(response.data);
        })
        .catch(err => {
            console.log("Meals list not returned", err)
        })
    });

    return(
        <div>
            {list.map(meal => (
                <MealCard
                key={meal.id}
                name={meal.name}
                category={meal.category}
                servings={meal.servings}
                date={meal.date}
                />
            ))}
        </div>
    )
}

export default MealList;