import React from "react";
import { useEffect, useReducer, useState } from "react";
import "./card.css";
import { dataTest } from "../common-data/dataTest";
const Card = ({ cardProperties }) => {
  return (
    <div className="card-outer-container">
      {
		cardProperties.companyDescription && cardProperties.companyDescription.map((element, index) => {
			return (
			<div key={index} className="card-content-out">
			<div className="card-content">
			<div className="card-icon">
				<h2>{cardProperties.companyDescription[index].name}</h2>
				<button>Icon</button>
			</div>
			<p>{cardProperties.companyDescription[index].description}</p>
			</div>
			<div className="card-tags-container">
			{cardProperties.companyDescription[index].tags.map(
				(element, index) => {
				return <p className="card-tags">{element}</p>;
				}
			)}
			</div>
			<hr className="line"></hr>
			</div>
			);
		})
       
      }
    </div>
  );
};

export default Card;
