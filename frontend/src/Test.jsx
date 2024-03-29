import React, { useEffect } from "react";
import Card from "./CardComponent/Card";
import { cardProp } from "./CardComponent/cardProp";
import Filter from "./FilterComponent/Filter";
import { filterProp } from "./FilterComponent/filterProp";
import Page from "./PageComponent/Page";
import Search from "./SearchComponent/Search";
import { searchProp } from "./SearchComponent/searchProp";
import "./Test.css";
import Nav from "./NavComponent/Nav";
import { navProp } from "./NavComponent/navProp";
import { data, dataTest } from "./common-data/dataTest";

const Test = () => {
  return (
    <div>
      <div>
        <Nav navProperties={navProp} />
      </div>
      <div className="outer">
        <div className="inner-left">
          <div className="filter">
            <Filter filterProperties={filterProp} />
          </div>
          <div className="filter">
            <Filter filterProperties={filterProp} />
          </div>
          <div className="filter">
            <Filter filterProperties={filterProp} />
          </div>
        </div>
        <div className="inner-right">
          <Search properties={searchProp} />
          <Card cardProperties={cardProp} />
        </div>
      </div>
    </div>
  );
};

export default Test;
