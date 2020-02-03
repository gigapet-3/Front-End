import React from "react";
import GigapetCard from "./GigapetCard";
import "./styles/TestSpace.css";
const TestSpace = props => {
  return (
    <>
      <h3>testing component</h3>
      <div className="test-gigapet-cards">
        <GigapetCard name="Kathleen" status="meow" />
        <GigapetCard name="Kathleen" status="meow" />
        <GigapetCard name="Kathleen" status="meow" />
        <GigapetCard name="Kathleen" status="meow" />
        <GigapetCard name="Kathleen" status="meow" />
        <GigapetCard name="Kathleen" status="meow" />
        <GigapetCard name="Kathleen" status="meow" />
        <GigapetCard name="Kathleen" status="meow" />
      </div>
    </>
  );
};

export default TestSpace;
