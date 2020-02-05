import React, { useState, useEffect } from "react";
import GigapetCard from "./GigapetCard";
import "./styles/GigapetView.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const emptyPetInfo = { id: 0, name: "", status: "new", url: "/meal/" };

const GigapetView = props => {
  const [newPet, setNewPet] = useState(false); // show form ?
  const [gigapets, setGigapets] = useState([]); // gigapet(s) being cared for.
  const [petInfo, setPetInfo] = useState({ ...emptyPetInfo }); // controlled inputs
  // const [userInfo, setUserInfo] = useState({ id: undefined });
  // useEffect(() => {
  //   axiosWithAuth()
  //     .post("https://gigapet-3.herokuapp.com/api/auth/register", {
  //       username: "gigaparent",
  //       password: "password"
  //     })
  //     .then(res => {
  //       setUserInfo(res.data);
  //       console.log(res);
  //     })
  //     .catch(errors => console.log(errors));
  //   // axiosWithAuth, GET .then setGigapets
  //   // console.log("gigapet view");
  // }, []);
  const handleNewGigapetClick = e => {
    e.preventDefault();
    setNewPet(!newPet);
  };
  const handleAddNewPet = e => {
    // (form submission)
    e.preventDefault();
    setGigapets([...gigapets, petInfo]); // update local
    // axiosWithAuth here... returns the updated record ?
    // we get the id from the result to populate the url.
    setPetInfo({ ...emptyPetInfo, url: `/meal/${petInfo.id}` }); //clear the controlled inputs
    setNewPet(false); // hide form
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
          <GigapetCard key={idx} id={idx} name={name} status={status} />
        ))}
      </div>
    </>
  );
};

export default GigapetView;
