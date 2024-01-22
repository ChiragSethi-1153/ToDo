import React, { useState } from "react";
import "../App.css";

function Filter(props) {
  return (
    <>
      <div className="filter-btns">
        <button
          type="button"
          className="filter-btn"
          aria-pressed={props.isPressed}
          onClick={() => props.setFilter(props.name)}
        >      
         <span>{props.name}</span> 
        </button>
      </div>
    </>
  );
}

export default Filter;
