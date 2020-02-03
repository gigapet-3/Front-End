import React from "react";
import "./styles/GigapetCard.css";

const GigapetCard = ({ name, status }) => {
  return (
    <div className="card gigapet-card-image-top m-2">
      <img
        src="https://placekitten.com/286/180"
        className="card-img-top"
        alt="pet name here"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{status}</p>
        <a href="/" className="btn btn-primary gigapet-primary">
          feed me
        </a>
      </div>
    </div>
  );
};

export default GigapetCard;
