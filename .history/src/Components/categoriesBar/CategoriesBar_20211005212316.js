import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./_categoriesBar.scss";
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
const CategoriesBar = () => {
  return (
    <div className="categoriesBar">
      {keywords.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export default CategoriesBar;
