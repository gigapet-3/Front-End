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
  const [gigapets, setGigapets] = useState();
  useEffect(() => {
    // axiosWithAuth here
    setGigapets(
      mockData.map(({ name, status }, idx) => (
        <GigapetCard key={idx} name={name} status={status} />
      ))
    );
  }, []);
  return (
    <>
      <h3 className="text-center">gigapets</h3>
      <div className="test-gigapet-cards">{gigapets}</div>
    </>
  );
};

export default GigapetView;
