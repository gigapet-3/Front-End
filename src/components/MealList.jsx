import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import MealCard from "./MealCard";


const MealList = () => {
    const [mealList, setMealList] = useState();

    useEffect(() => {
        axiosWithAuth()
        .get('/meals')//change this to meals with pet id
        .then(response => {
            console.log(response)
            setMealList(response.data);
        })
        .catch(err => {
            console.log("Meals list not returned", err)
        })
    }[]);



    return(
        <div>
            <MealCard mealList={mealList} updateList={setMealList} />
        </div>
    )
}

export default MealList;