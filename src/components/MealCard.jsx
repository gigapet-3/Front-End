import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import "./styles/MealCard.css";

const initialMeal = {
    date: '',
    category: '',
    servings: '',
    name: '',
    id: ''
};

const MealCard = ({ mealList, updateList, petNumber}) => {
    const [editing, setEditing] = useState(false);
    const [mealToEdit, setMealToEdit] = useState(initialMeal);
    
    const handleUpdate = e => {
        setMealToEdit({
            ...mealToEdit,
            [e.target.name] : e.target.value
        });
    };
    
    const editMeal = food => {
        setEditing(true);
        setMealToEdit(food)        
    }

    const saveEdit = e => {        
        axiosWithAuth()
        .put(`/meals/${mealToEdit.id}`, mealToEdit)
        .then(res => {
            console.log(res)
            setEditing(false)  
            axiosWithAuth()
                .get('/meals')//change this to meals with pet id
                .then(response => {
                    console.log(response)
                    updateList(response.data.filter(m => m.pet_id === petNumber));
                })
                .catch(err => {
                    console.log("Meals list not returned", err)
                })         

        })
        .catch(err => console.log('Editing error', err))
    };

    const deleteFood = food => {
        
        axiosWithAuth()
        .delete(`/meals/${food.id}`)
        .then(res => {
            console.log(res)
            axiosWithAuth()
                .get('/meals')//change this to meals with pet id
                .then(response => {
                    console.log(response)
                    updateList(response.data.filter(m => m.pet_id === petNumber));
                })
                .catch(err => {
                    console.log("Meals list not returned", err)
                })         
        })
        .catch(err => console.log('Deleting error', err))
    }
 
    return (
        <div>
            {mealList && mealList.map(food => (
                (editing && food.id === mealToEdit.id)  ? 
                (
                <div className="card mealcard-card-image-top m-2" style={{width: "18rem"}} key={mealToEdit.id}>
                <div className="card-body" >
                    <h5 className="card-title">Category: </h5>
                        <input 
                        type="text"
                        name="category"
                        value={mealToEdit.category}
                        onChange={handleUpdate}
                        />
                    
                    <h6 className="card-text">Date:</h6>
                        <input 
                        type="text"
                        name="date"
                        value={mealToEdit.date}
                        onChange={handleUpdate}
                        />
                    
                    <p className="card-text">Name: </p>
                        <input 
                        type="text"
                        name="name"
                        value={mealToEdit.name}
                        onChange={handleUpdate}
                        />
                    
                    <p className="card-text">Servings: </p>
                    <input 
                        type="text"
                        name="servings"
                        value={mealToEdit.servings}
                        onChange={handleUpdate}
                        />
                    
                    <button className="btn btn-primary mealcard-primary" onClick={() => setEditing(false)}>Cancel</button>
                    <button className="btn btn-primary mealcard-primary m-3"onClick={saveEdit}>Save Changes</button>
                </div>
            </div>
            ) :
            <div className="card mealcard-card-image-top m-2" style={{width: "18rem"}} key={food.id}>
                <img
                src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                className="card-img-top"
                alt="pet name here"
            />
                <div className="card-body" >
                    <h5 className="card-title">Category: {food.category}</h5>
                    <p className="card-text">Date: {food.date}</p>
                    <p className="card-text">Name: {food.name}</p>
                    <p className="card-text">Servings: {food.servings}</p>
                    <button className="btn btn-primary mealcard-primary" onClick={() => editMeal(food)}>Edit</button>
                    <button className="btn btn-primary mealcard-primary m-4" onClick={() => deleteFood(food)}>Delete</button>
                </div>
            </div>
            ))}
        </div>
    )
};

export default MealCard;