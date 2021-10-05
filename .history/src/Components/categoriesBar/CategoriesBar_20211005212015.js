import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { keyWords } from "../../data/CategoriesBarkey";
import "./_categoriesBar.scss";
const CategoriesBar = () => {
  return (
    <div className="categoriesBar">
      {keyWords.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
};

export default CategoriesBar;
