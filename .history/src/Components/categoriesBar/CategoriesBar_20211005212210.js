import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { keyWords } from "../../data/CategoriesBarkey";
import "./_categoriesBar.scss";
const CategoriesBar = () => {
  const keywords = [
    "All",
    "React js",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art ",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Poor Coder",
    "Shwetabh",
  ];

  return (
    <div className="categoriesBar">
      {keyWords.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
};

export default CategoriesBar;
