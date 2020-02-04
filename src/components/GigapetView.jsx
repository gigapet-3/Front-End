import React, { useState, useEffect } from "react";
import GigapetCard from "./GigapetCard";
import "./styles/GigapetView.css";

const emptyPetInfo = { name: "", status: "new", url: "/dashboard" };

const GigapetView = props => {
  const [newPet, setNewPet] = useState(false);
  const [gigapets, setGigapets] = useState([]);
  const [petInfo, setPetInfo] = useState({ ...emptyPetInfo });
  useEffect(() => {
    // axiosWithAuth here
    console.log("gigapet view");
  }, []);
  const handleNewGigapetClick = e => {
    e.preventDefault();
    setNewPet(!newPet);
  };
  const handleAddNewPet = e => {
    // (form submission)
    e.preventDefault();
    // axiosWithAuth here
    setGigapets([...gigapets, petInfo]);
    setPetInfo(emptyPetInfo);
    setNewPet(false);
  };

  const handleChange = e => {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="add-gigapet-div">
        <button
          onClick={handleNewGigapetClick}
          className="add-gigapet-btn button-large btn-primary m-2 p-2"
        >
          new gigapet
        </button>
      </div>
      {newPet && (
        <div className="add-gigapet-form m-4">
          <form onSubmit={handleAddNewPet}>
            <input
              placeholder="name"
              name="name"
              className="form-control"
              value={petInfo.name}
              onChange={handleChange}
            />
            <button className="add-gigapet-btn button-large btn-primary m-2 p-2">
              add
            </button>
          </form>
        </div>
      )}
      <h3 className="text-center">gigapets</h3>
      <div className="test-gigapet-cards">
        {gigapets.map(({ name, status }, idx) => (
          <GigapetCard key={idx} name={name} status={status} />
        ))}
      </div>
    </>
  );
};

export default GigapetView;
