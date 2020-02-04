import React, { useState, useEffect } from "react";
import GigapetCard from "./GigapetCard";
import "./styles/GigapetView.css";

const mockData = [
  { name: "Kathleen", status: "meow", url: "/" },
  { name: "Catherine", status: "meow", url: "/" },
  { name: "Katrina", status: "meow", url: "/" },
  { name: "Cathy", status: "meow", url: "/" },
  {
    name: "The honorable Judge Meow-meow Smith",
    status: "justice meow!",
    url: "/"
  }
];

const GigapetView = props => {
  const [newPet, setNewPet] = useState(false);
  const [gigapets, setGigapets] = useState();
  useEffect(() => {
    // axiosWithAuth here
    setGigapets(
      mockData.map(({ name, status }, idx) => (
        <GigapetCard key={idx} name={name} status={status} />
      ))
    );
  }, []);
  const handleNewGigapetClick = e => {
    e.preventDefault();
    setNewPet(!newPet);
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
          <form>
            <input placeholder="name" className="form-control" />
          </form>
          <button>add</button>
        </div>
      )}
      <h3 className="text-center">gigapets</h3>
      <div className="test-gigapet-cards">{gigapets}</div>
    </>
  );
};

export default GigapetView;
