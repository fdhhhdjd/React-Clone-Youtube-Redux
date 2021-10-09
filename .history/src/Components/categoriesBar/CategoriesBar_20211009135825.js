import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../Redux/Action/VideoAction";
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
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={value}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
