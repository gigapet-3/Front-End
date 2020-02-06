import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles/GigapetCard.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const GigapetCard = ({ name, status, id, setGigapets }) => {
  const [editing, setEditing] = useState(false);
  const [cardInfo, setCardInfo] = useState({ name, status });
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push(`/meal/${id}`);
  };
  const handleMeals = e => {
    e.preventDefault();
    history.push(`/meal-list/${id}`);
  };
  const handleEditClick = e => {
    e.preventDefault();
    editing &&
      axiosWithAuth()
        .put(`/pets/${id}`, cardInfo)
        .then(() => {
          axiosWithAuth()
            .get("/pets")
            .then(updated => {
              setGigapets(updated.data);
            })
            .catch(updateErr => console.log(updateErr));
        })
        .catch(putErr => console.log(putErr));
    setEditing(!editing);
  };
  const handleChange = e => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };
  return (
    <div className="card gigapet-card-image-top m-2">
      <img
        src="https://placekitten.com/286/180"
        className="card-img-top"
        alt="pet name here"
      />
      <button
        type="button"
        className="btn btn-light edit-btn"
        onClick={handleEditClick}
      >
        {editing ? "save" : "edit"}
      </button>
      <div className="card-body">
        {editing ? (
          <>
            <input
              placeholder="name"
              name="name"
              className="form-control"
              value={cardInfo.name}
              onChange={handleChange}
            />
            <input
              placeholder={`${cardInfo.name || "Pet"}'s status`}
              name="status"
              className="form-control"
              value={cardInfo.status}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{status}</p>
          </>
        )}
        <a
          href="meals"
          onClick={handleClick}
          className="btn btn-primary gigapet-primary"
        >
          feed me
        </a>
        <a
          href="meal-list"
          onClick={handleMeals}
          className="m-2 btn btn-primary gigapet-primary"
        >
          meal history
        </a>
      </div>
    </div>
  );
};

export default GigapetCard;
