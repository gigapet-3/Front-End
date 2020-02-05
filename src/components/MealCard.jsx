import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";

const initialMeal = {
    date: '',
    category: '',
    servings: '',
    name: '',
    id: ''
};

const MealCard = ({ mealList, updateList}) => {
    const [editing, setEditing] = useState(false);
    const [mealToEdit, setMealToEdit] = useState(initialMeal);
    const history = useHistory();

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
                    updateList(response.data);
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
            updateList(mealList => mealList.filter(meal => {
                return meal.id !== res.data
            }))
        })
        .catch(err => console.log('Deleting error', err))
    }
 
    return (
        <div>
            {mealList && mealList.map(food => (
                (editing && food.id === mealToEdit.id)  ? 
                (
                <div className="card text-center" style={{width: "18rem"}} key={mealToEdit.id}>
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
                    
                    <button onClick={() => setEditing(false)}>Cancel</button>
                    <button onClick={saveEdit}>Save Changes</button>
                </div>
            </div>
            ) :
            <div className="card text-center" style={{width: "18rem"}} key={food.id}>
                <div className="card-body" >
                    <h5 className="card-title">Category: {food.category}</h5>
                    <h6 className="card-text">Date: {food.date}</h6>
                    <p className="card-text">Name: {food.name}</p>
                    <p className="card-text">Servings: {food.servings}</p>
                    <button onClick={() => editMeal(food)}>Edit</button>
                    <button onClick={() => deleteFood(food)}>Delete</button>
                </div>
            </div>
            ))}
        </div>
    )
};

export default MealCard;