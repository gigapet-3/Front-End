import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialMeal = {
    date: '',
    category: '',
    servings: '',
    name: '',
    id: ''
};

const MealCard = ({ mealList, updateMeals}) => {
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
            updateMeals(res.data)
        })
        .cath(err => console.log('Editing error', err))
    };

    const deleteColor = food => {
        axiosWithAuth()
        .delete(`/meals/${food.id}`)
        .then(res => {
            updateMeals(mealList => mealList.filter(meal => {
                return meal.id !== res.data
            }))
        })
        .catch(err => console.log('Deleting error', err))
    }
 
    return (
        <div>
            {mealList.map(food => (
            <div className="card text-center" style="width: 18rem;">
                <div className="card-body" id={food.id}>
                    <h5 className="card-title">Category: {food.category}</h5>
                    <h6 className="card-text">Date: {food.date}</h6>
                    <p className="card-text">Name: {food.name}</p>
                    <p className="card-text">Servings: {food.servings}</p>
                    <button onClick={() => editMeal(food)}>Edit</button>
                    <button onClick={() => deleteColor(food)}>Delete</button>
                </div>
            </div>
            ))}
            {editing && (
                <div className="card text-center" style="width: 18rem;">
                <div className="card-body" id={mealToEdit.id}>
                    <h5 className="card-title">Category:
                        <input 
                        type="text"
                        name="category"
                        value={mealToEdit.category}
                        onChange={handleUpdate}
                        />
                    </h5>
                    <h6 className="card-text">Date:
                        <input 
                        type="text"
                        name="date"
                        value={mealToEdit.date}
                        onChange={handleUpdate}
                        />
                    </h6>
                    <p className="card-text">Name: <input 
                        type="text"
                        name="name"
                        value={mealToEdit.name}
                        onChange={handleUpdate}
                        />
                    </p>
                    <p className="card-text">Servings: 
                    <input 
                        type="text"
                        name="servings"
                        value={mealToEdit.servings}
                        onChange={handleUpdate}
                        />
                    </p>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                    <button onClick={saveEdit}>Save Changes</button>
                </div>
            </div>
            )}
        </div>
    )
};

export default MealCard;