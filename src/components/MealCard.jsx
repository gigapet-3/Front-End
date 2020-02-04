import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const MealCard = props => {
    const [mealToEdit, setMealToEdit] = useState();

    // const edit = e => {
    //     e.preventDefault()
    //     axiosWithAuth()
    //     .put(`/meals/${props.id}`, )
    // }











    return (
        <div>
            <div class="card text-center" style="width: 18rem;">
                <div className="card-body" id={props.id}>
                    <h5 class="card-title">Category: {props.category}</h5>
                    <h6 class="card-text">Date: {props.date}</h6>
                    <p class="card-text">Name: {props.name}</p>
                    <p class="card-text">Servings: {props.servings}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default MealCard;