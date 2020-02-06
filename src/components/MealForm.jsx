import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./styles/MealForm.css";

// https://getbootstrap.com/docs/4.4/components/card/

const MealForm = props => {
  const { petId } = useParams();
  const [meal, setMeal] = useState({
    date: "",
    category: "",
    servings: "",
    name: "",
    pet_id: petId
  });



  const handleChange = e => {
    setMeal({
      ...meal,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/meals", meal)
      .then(res => {
        console.log("Meals added", res);
        props.history.push(`/meal-list/${meal.pet_id}`);
      })
      .catch(err => {
        console.log("Adding meal err", err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="food-input">Date</label>
          <input
            className="form-control"
            id="date-input"
            rows="3"
            name="date"
            placeholder="Date mm/dd/yyyy"
            value={meal.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="food-input">Name of Food</label>
          <input
            className="form-control"
            id="food-input"
            rows="3"
            name="name"
            placeholder="Ex...Granny Smith Apple"
            onChange={handleChange}
            value={meal.name}
          />
        </div>
        <div className="form-group">
        <label htmlFor="food category">Food Category</label>
        <select          
          className="form-control"
          id="food-category"
          name="category"
          onChange={handleChange}
          rows="3"
        >
        <option>Choose food category</option>
          <option value="dairy">Dairy</option>
          <option value="fruit">Fruit</option>
          <option value="grains">Grains</option>
          <option value="meat">Meat</option>
          <option value="sweets">Sweets</option>
          <option value="vegetables">Vegetables</option>
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="servings">Servings</label>
          <select
            className="form-control"
            id="servings"
            name="servings"
            rows="3"
            onChange={handleChange}
          >
          <option>Choose serving size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>      
        <button className="btn btn-primary">Feed my pet</button>
      </form>
    </div>
  );
};

export default MealForm;
