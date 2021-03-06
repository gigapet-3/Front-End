import React, { useState, useEffect } from "react";
import GigapetCard from "./GigapetCard";
import "./styles/Dashboard.css";
import "./styles/GigapetView.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const emptyPetInfo = { id: 0, name: "", status: "", url: "/meal/" };

const GigapetView = props => {
  const [newPet, setNewPet] = useState(false); // show form ?
  const [gigapets, setGigapets] = useState([]); // gigapet(s) being cared for.
  const [petInfo, setPetInfo] = useState({ ...emptyPetInfo }); // controlled inputs
  // const [userInfo, setUserInfo] = useState({ id: undefined });
  useEffect(() => {
    axiosWithAuth()
      .get("/pets")
      .then(res => {
        setGigapets(res.data);
      })
      .catch(errors => console.log(errors));
  }, []);
  const handleNewGigapetClick = e => {
    e.preventDefault();
    setNewPet(!newPet);
  };
  const handleAddNewPet = e => {
    // (form submission)
    debugger;
    e.preventDefault();
    setGigapets([...gigapets, petInfo]); // update local
    axiosWithAuth()
      .post("/pets", { name: petInfo.name, status: petInfo.status })
      .then(res => {
        console.log(res.data);
      });
    // axiosWithAuth here... returns the updated record ?
    // we get the id from the result to populate the url.
    setPetInfo({ ...emptyPetInfo, url: `/meal/${petInfo.id}` }); //clear the controlled inputs
    setNewPet(false); // hide form
  };

  const handleChange = e => {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-001">
      <button
        onClick={handleNewGigapetClick}
        className="add-gigapet-btn button-large btn-primary m-4 p-2"
      >
        new gigapet
      </button>

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
            <input
              placeholder={`${petInfo.name || "Pet"}'s status`}
              name="status"
              className="form-control"
              value={petInfo.status}
              onChange={handleChange}
            />
            <button className="add-gigapet-btn button-large btn-primary m-2 p-2">
              add
            </button>
          </form>
        </div>
      )}
      <span className="gigapet-cards">
        {gigapets.map(({ name, status, id }) => (
          <GigapetCard
            key={id}
            id={id}
            name={name}
            status={status}
            setGigapets={setGigapets}
          />
        ))}
      </span>
    </div>
  );
};

export default GigapetView;
