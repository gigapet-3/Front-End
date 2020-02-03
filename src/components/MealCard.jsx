import React, {useState} from "react";


// https://getbootstrap.com/docs/4.4/components/card/

const MealCard = props => {
  const [meal, setMeal] = useState();

  const date = Date.now();

  return (
    <div>
    {/* <div class="container">
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker3'>
                    <input  type='text' class="form-control" />
                    <span  class="input-group-addon">
                        <span class="glyphicon glyphicon-time"></span>
                    </span>
                </div>
            </div>
        </div>
        
    </div>
</div> */}
    <form>
    <label for="food category">Choose a food category</label>
            <select multiple class="form-control" id="food-category">
              <option>Dairy</option>
              <option>Fruit</option>
              <option>Grains</option>
              <option>Meat</option>
              <option>Sweets</option>
              <option>Vegetables</option>
            </select>
          <div class="form-group">
            <label for="servings">Servings</label>
            <select class="form-control" id="servings">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">           
          </div>
          <div class="form-group">
            <label for="food-input">Food Description</label>
            <textarea class="form-control" id="food-input" rows="3"></textarea>
          </div>
          <button>Feed my pet</button>
    </form>
    </div>
  )
  
};

export default MealCard;
