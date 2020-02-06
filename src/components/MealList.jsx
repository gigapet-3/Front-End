import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from "react-router-dom";
import MealCard from "./MealCard";
import "./styles/MealList.css";


const MealList = () => {
    const { petId } = useParams();
    const [mealList, setMealList] = useState([]);
    const petNumber = Number(petId);

    useEffect(() => {
        setMealList(undefined)
        axiosWithAuth()
        .get('/meals')//change this to meals with pet id
        .then(response => {
            console.log(response)
            setMealList(response.data.filter(m => m.pet_id === petNumber));
        })
        .catch(err => {
            console.log("Meals list not returned", err)
        })
    }, [petNumber]);

    
    if (mealList) {
        return(
        
            <div className="meal-list-container">
                <MealCard mealList={mealList} updateList={setMealList} />
            </div>)
    }  else return (<h1>Loading</h1>)

}

export default MealList;