import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// https://getbootstrap.com/docs/4.4/components/card/

const MealForm = props => {
  const [meal, setMeal] = useState({
    date: "",
    category: "",
    servings: "",
    name: "",
    id: Date.now()
  });

  const { id } = useParams();

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
        props.history.push("/meal-list");
      })
      .catch(err => {
        console.log("Adding meal err", err);
      });
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="food-input">Date</label>
          <input
            class="form-control"
            id="date-input"
            rows="3"
            name="date"
            placeholder="Date mm/dd/yyyy"
            value={meal.date}
            onChange={handleChange}
          ></input>
        </div>

        <label for="food category">Choose a Food Category</label>
        <select
          multiple
          class="form-control"
          id="food-category"
          name="category"
          onChange={handleChange}
        >
          <option value="dairy">Dairy</option>
          <option value="fruit">Fruit</option>
          <option value="grains">Grains</option>
          <option value="meat">Meat</option>
          <option value="sweets">Sweets</option>
          <option value="vegetables">Vegetables</option>
        </select>
        <div className="form-group">
          <label for="servings">Servings</label>
          <select
            class="form-control"
            id="servings"
            name="servings"
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group"></div>
        <div class="form-group">
          <label for="food-input">Food Description</label>
          <input
            className="form-control"
            id="food-input"
            rows="3"
            name="name"
            placeholder="Ex...Granny Smith Apple"
            onChange={handleChange}
            value={meal.name}
          ></input>
        </div>

        <button>Feed my pet</button>
      </form>
    </div>
  );
};

export default MealForm;
