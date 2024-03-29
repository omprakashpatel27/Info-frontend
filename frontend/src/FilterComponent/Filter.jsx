import React from "react";
import axios from "axios";
import { useState } from "react";
import "./filter.css";
import { dataTest } from "../common-data/dataTest";

const Filter = ({ filterProperties }) => {
  const [checkedItems, setCheckedItems] = useState(
    filterProperties.itemsChecked
  );

  const [showAll, setShowAll] = useState(false);

  const initialItemCount = 4;

  const remainingItemcount = filterProperties.items.length - initialItemCount;

  const toggleButton = () => {
    setShowAll(!showAll);
  };

  const handleChange = (event, index) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedItems((prevState) => [
        ...prevState,
        (filterProperties.itemsChecked[index] = true),
      ]);
    } else {
      setCheckedItems((prevState) => [
        ...prevState,
        (filterProperties.itemsChecked[index] = false),
      ]);
    }
  };

  const sendToServer = () => {
    let checkedData = [];
    filterProperties.items.map((element, index) => {
      if (filterProperties.itemsChecked[index] === true) {
        checkedData.push(element);
      }
    });
    axios
      .post("http://localhost:3001/api/company-filter", checkedData)
      .then(function (response) {
        if (response.data.data) {
          response.data.data.map((element, index) => {
            dataTest.push(element);
          });
        }
        localStorage.setItem("myData", JSON.stringify(dataTest));
        window.location.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div class="filter-container">
      <div className="filter-header-container">
        <h3 className="filter-header">{filterProperties.name}</h3>
        <hr className="line"></hr>
      </div>
      <div className="filter-scrollable">
        <ul className="filter-ul">
          {filterProperties.items
            .slice(
              0,
              showAll ? filterProperties.items.length : initialItemCount
            )
            .map((element, index) => {
              return (
                <li className="filter-list" key={index}>
                  <label className="filter-label" key={index}>
                    <input
                      type="checkbox"
                      value={element}
                      onChange={(event) => {
                        handleChange(event, index);
                      }}
                    />
                    {element}
                  </label>
                </li>
              );
            })}
          {!showAll && filterProperties.items.length > initialItemCount && (
            <button className="filter-show-all" onClick={toggleButton}>
              {remainingItemcount} MORE
            </button>
          )}
        </ul>
      </div>
      <div className="filter-button-container">
        <button type="submit" className="filter-button" onClick={sendToServer}>
          APPLY FILTERS
        </button>
      </div>
    </div>
  );
};

export default Filter;
